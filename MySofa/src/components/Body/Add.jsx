import Form from "../Body/Form";

import { useProductDispatch } from "../../contexts/ProductContext";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const nav = useNavigate();
  const { onCreate } = useProductDispatch();

  const onSubmit = (item) => {
    onCreate(item.name, item.color, item.material, item.size, item.model);
    nav("/admin", { replace: true });
  };

  return (
    <div>
      <Form title={"추가"} submitText={"저장"} onSubmit={onSubmit} />
    </div>
  );
};

export default Add;
