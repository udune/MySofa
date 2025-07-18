import { Product } from "@/types";
import { useProductState } from "../contexts/ProductContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useProduct = (id: string): Product | undefined => {
  const items = useProductState();
  const [item, setItem] = useState<Product | undefined>();
  const nav = useNavigate();

  useEffect(() => {
    const foundItem = items.find((item) => String(item.id) === String(id));
    if (!foundItem) {
      window.alert("존재하지 않는 제품입니다.");
      nav("/", { replace: true });
      return;
    }

    setItem(foundItem);
  }, [id, items, nav]);

  return item;
};

export default useProduct;
