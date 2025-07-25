import Form from "./Form";
import useTitle from "../../hook/useTitle";

import { useProductDispatch } from "../../contexts/ProductContext";
import { useNavigate } from "react-router-dom";
import { ProductFormInput } from "@/types";

const Add: React.FC = () => {
  const nav = useNavigate();
  const { onCreate } = useProductDispatch();
  useTitle("MySofa :: 제품 추가 페이지");

  const onSubmit = (item: ProductFormInput): void => {
    onCreate(item.name, item.custom_name, item.color, item.material, item.size, item.model_type);
    nav("/home/admin", { replace: true });
  };

  return (
    <div>
      <Form title={"추가"} submitText={"저장"} onSubmit={onSubmit} />
    </div>
  );
};

export default Add;
