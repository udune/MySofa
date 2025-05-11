import Form from "./Form";

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

  useEffect(() => {
    const item = items.find((item) => String(item.id) === String(params.id));
    if (!item) {
      window.alert("존재하지 않는 제품입니다.");
      nav("/admin", { replace: true });
    }

    setItem(item);
  }, [params.id]);

  const onSubmit = (item) => {
    onUpdate(
      item.id,
      item.name,
      item.color,
      item.material,
      item.size,
      item.model
    );
    nav("/admin", { replace: true });
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
