import { createContext, useContext, useState } from "react";

const MyItemDatas = [
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
];

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
