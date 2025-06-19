import { useMyItemState } from "../contexts/MyItemContext";
import { useState, useEffect } from "react";

const useMyItem = (id) => {
  const items = useMyItemState();
  const [item, setItem] = useState();

  useEffect(() => {
    const item = items.find((item) => String(item.id) === String(id));
    if (!item) {
      window.alert("존재하지 않는 제품입니다.");
      nav("/", { replace: true });
    }

    setItem(item);
  }, [id]);

  return item;
};

export default useMyItem;
