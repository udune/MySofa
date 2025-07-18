import { Color, Material, ModelType, Product, ProductContextType, ProductName, Size } from "@/types";
import { productItemDatas } from "../util/constants";
import { createContext, useReducer, useRef, useContext, ReactNode } from "react";

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
  | { type: "CREATE"; data: Product }
  | { type: "UPDATE"; data: Product }
  | { type: "DELETE"; id: number };

function reducer(state: Product[], action: Action): Product[] {
  switch (action.type) {
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
  const [state, dispatch] = useReducer(reducer, productItemDatas);
  const idRef = useRef<number>(5);

  const onCreate = (name: ProductName, customName: string, color: Color, material: Material, size: Size, modelType: ModelType) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        name,
        customName,
        color,
        material,
        size,
        modelType,
      },
    });
  };

  const onUpdate = (id: number, name: ProductName, customName: string, color: Color, material: Material, size: Size, modelType: ModelType): void => {
    dispatch({
      type: "UPDATE",
      data: { id, name, customName, color, material, size, modelType },
    });
  };

  const onDelete = (id: number): void => {
    dispatch({
      type: "DELETE",
      id,
    });
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
