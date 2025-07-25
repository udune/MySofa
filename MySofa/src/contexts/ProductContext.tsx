import { Color, Material, ModelType, Product, ProductContextType, ProductName, Size } from "@/types";
import { createContext, useReducer, useRef, useContext, ReactNode, useEffect } from "react";
import { productService } from "@/services/productService";

const ProductStateContext = createContext<Product[] | undefined>(undefined);
const ProductDispatchContext = createContext<ProductContextType | undefined>(undefined);
export const useProductState = (): Product[] => {
  const context = useContext(ProductStateContext);
  if (context === undefined) {
    throw new Error('useProductState must be used within a ProductContext');
  }
  return context;
};
export const useProductDispatch = (): ProductContextType => {
  const context = useContext(ProductDispatchContext);
  if (context === undefined) {
    throw new Error('useProductDispatch must be used within a ProductContext');
  }
  return context;
};

type Action =
  | { type: "SET_PRODUCTS"; products: Product[] }
  | { type: "CREATE"; data: Product }
  | { type: "UPDATE"; data: Product }
  | { type: "DELETE"; id: number };

function reducer(state: Product[], action: Action): Product[] {
  switch (action.type) {
    case "SET_PRODUCTS":
      return action.products;
    case "CREATE":
      return [...state, action.data];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.data.id ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
}

interface ProductContextProps {
  children: ReactNode;
}

const ProductContext: React.FC<ProductContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  const idRef = useRef<number>(1);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await productService.getProducts();
        dispatch({ type: "SET_PRODUCTS", products })

        if (products.length > 0) {
          const maxId = Math.max(...products.map(p => p.id));
          idRef.current = maxId + 1;
        }
      } catch (error) {
        console.log('상품 조회 실패', error);
      }
    };

    loadProducts();
  }, [])

  const onCreate = async (name: ProductName, customName: string, color: Color, material: Material, size: Size, modelType: ModelType) => {
    try {
      const newProduct = await productService.createProduct({
        name,
        customName,
        color,
        material,
        size,
        modelType,
      });

      dispatch({
        type: "CREATE",
        data: newProduct,
      });
    } catch (error) {
      console.log('상품 생성 실패', error);
      throw error;
    }
  };

  const onUpdate = async (id: number, name: ProductName, customName: string, color: Color, material: Material, size: Size, modelType: ModelType): Promise<void> => {
    try {
      const updatedProduct = await productService.updateProduct(id, {
        name, 
        customName,
        color,
        material,
        size,
        modelType,
      })

      dispatch({
        type: "UPDATE",
        data: updatedProduct,
      });
    } catch (error) {
      console.log('상품 수정 실패', error);
      throw error;
    }
    

  };

  const onDelete = async (id: number): Promise<void> => {
    
    try {
      await productService.deleteProduct(id);

      dispatch({
        type: "DELETE",
        id,
      })
    } catch (error) {
      console.log('상품 삭제 실패', error);
      throw error;
    }
  };

  return (
    <ProductStateContext.Provider value={state}>
      <ProductDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
        {children}
      </ProductDispatchContext.Provider>
    </ProductStateContext.Provider>
  );
};

export default ProductContext;
