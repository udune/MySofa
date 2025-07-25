import { MyItemContextType, Product } from "@/types";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { myItemService } from "@/services/myItemService";

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
  const [myItems, setMyItems] = useState<Product[]>([]);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated()) {
      return;
    }

    const loadMyItems = async () => {
      try {
        const myItems = await myItemService.getMyItems();
        setMyItems(myItems);
      } catch (error) {
        console.log('마이 아이템 조회 실패', error)
      }
    }

    loadMyItems();
  }, [isAuthenticated])

  const onDelete = (id: string): void => {
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