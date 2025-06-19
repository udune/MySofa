import Form from "./Form";
import useTitle from "../../hook/useTitle";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useProductState,
  useProductDispatch,
} from "../../contexts/ProductContext";

const Edit = () => {
  const nav = useNavigate();
  const params = useParams();
  const items = useProductState();
  const { onUpdate } = useProductDispatch();
  const [item, setItem] = useState();
  useTitle("MySofa :: 제품 수정 페이지");

  useEffect(() => {
    const item = items.find((item) => String(item.id) === String(params.id));
    if (!item) {
      window.alert("존재하지 않는 제품입니다.");
      nav("/home/admin", { replace: true });
    }

    setItem(item);
  }, [params.id]);

  const onSubmit = (item) => {
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
