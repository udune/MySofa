import Form from "./Form";
import useTitle from "../../hook/useTitle";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useProductState,
  useProductDispatch,
} from "../../contexts/ProductContext";
import { Product, ProductFormInput } from "@/types";

const Edit: React.FC = () => {
  const nav = useNavigate();
  const params = useParams<{id: string}>();
  const items = useProductState();
  const { onUpdate } = useProductDispatch();
  const [item, setItem] = useState<Product | undefined>();
  useTitle("MySofa :: 제품 수정 페이지");

  useEffect(() => {
    if (!params.id)
      return;

    const foundItem = items.find((item) => String(item.id) === String(params.id));
    if (!foundItem) {
      window.alert("존재하지 않는 제품입니다.");
      nav("/home/admin", { replace: true });
      return;
    }

    setItem(foundItem);
  }, [params.id, items, nav]);

  const onSubmit = (item: ProductFormInput & { id?: number }): void => {
    if (!item.id)
      return;

    onUpdate(
      item.id,
      item.name,
      item.customName,
      item.color,
      item.material,
      item.size,
      item.modelType
    );
    nav("/home/admin", { replace: true });
  };

  return (
    <div>
      <Form
        title={"수정"}
        submitText={"업데이트"}
        item={item}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Edit;
