import { MyItemContextType, Product } from "@/types";
import { MyItemDatas } from "../util/constants";
import { createContext, ReactNode, useContext, useState } from "react";

const MyItemStateContext = createContext<Product[] | undefined>(undefined);
const MyItemDispatchContext = createContext<MyItemContextType | undefined>(undefined);
export const useMyItemState = (): Product[] => {
  const context = useContext(MyItemStateContext);
  if (context === undefined) {
    throw new Error('useMyItemState must be used within a MyItemContext');
  }
  return context;
}
export const useMyItemDispatch = (): MyItemContextType => {
  const context = useContext(MyItemDispatchContext);
  if (context === undefined) {
    throw new Error('useMyItemDispatch must be used within a MyItemContext');
  }
  return context;
}

interface MyItemContextProps {
  children: ReactNode;
}

const MyItemContext: React.FC<MyItemContextProps> = ({ children }) => {
  const [myItems, setMyItems] = useState<Product[]>(MyItemDatas);

  const onDelete = (id: number): void => {
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
