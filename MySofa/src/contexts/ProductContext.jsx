import { productItemDatas } from "../util/constants";
import { createContext, useReducer, useRef, useContext } from "react";

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

  const onCreate = (name, customName, color, material, size, modelType) => {
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

  const onUpdate = (id, name, customName, color, material, size, modelType) => {
    dispatch({
      type: "UPDATE",
      data: { id, name, customName, color, material, size, modelType },
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
