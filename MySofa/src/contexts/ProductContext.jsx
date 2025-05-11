import { createContext, useReducer, useRef, useContext } from "react";

const productItemDatas = [
  {
    id: 1,
    name: "라운지 소파",
    color: "gray",
    material: "fabric",
    size: "small",
    model: "a",
  },
  {
    id: 2,
    name: "모듈러 소파",
    color: "beige",
    material: "leather",
    size: "small",
    model: "b",
  },
  {
    id: 3,
    name: "1인용 소파",
    color: "black",
    material: "fabric",
    size: "large",
    model: "a",
  },
  {
    id: 4,
    name: "클래식 소파",
    color: "gray",
    material: "leather",
    size: "large",
    model: "b",
  },
];

const ProductStateContext = createContext();
const ProductDispatchContext = createContext();
export const useProductState = () => useContext(ProductStateContext);
export const useProductDispatch = () => useContext(ProductDispatchContext);

function reducer(state, action) {
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

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, productItemDatas);
  const idRef = useRef(5);

  const onCreate = (name, color, material, size, model) => {
    dispatch({
      type: "CREATE",
      data: { id: idRef.current++, name, color, material, size, model },
    });
  };

  const onUpdate = (id, name, color, material, size, model) => {
    dispatch({
      type: "UPDATE",
      data: { id, name, color, material, size, model },
    });
  };

  const onDelete = (id) => {
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
