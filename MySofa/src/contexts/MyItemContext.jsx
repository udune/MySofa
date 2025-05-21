import { MyItemDatas } from "../util/constants";
import { createContext, useContext, useState } from "react";

const MyItemStateContext = createContext();
const MyItemDispatchContext = createContext();
export const useMyItemState = () => useContext(MyItemStateContext);
export const useMyItemDispatch = () => useContext(MyItemDispatchContext);

const MyItemContext = ({ children }) => {
  const [myItems, setMyItems] = useState(MyItemDatas);

  const onDelete = (id) => {
    setMyItems(myItems.filter((item) => item.id !== id));
  };

  return (
    <MyItemStateContext.Provider value={myItems}>
      <MyItemDispatchContext.Provider value={{ onDelete }}>
        {children}
      </MyItemDispatchContext.Provider>
    </MyItemStateContext.Provider>
  );
};

export default MyItemContext;
