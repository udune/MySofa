import "../../styles/AdminItem.css";
import "../../styles/buttons.css";

import { useNavigate } from "react-router-dom";

import {
  getColor,
  getMaterial,
  getModelType,
  getSize,
} from "../../util/detailDesc.js";
import { AdminItemProps } from "@/types/index.js";

const AdminItem: React.FC<AdminItemProps> = ({ index, item, onDelete }) => {
  const { id, custom_name, color, material, size, model_type } = item;
  const nav = useNavigate();

  return (
    <tr className="adminItem">
      <td className="table_data_id">{index+1}</td>
      <td className="table_data_name">{custom_name}</td>
      <td className="table_data_type">
        {getColor(color).value}|{getMaterial(material).value}|
        {getSize(size).value}|{getModelType(model_type).value}
      </td>
      <td className="table_data_buttons">
        <button className="edit_button" onClick={() => nav(`/home/edit/${id}`)}>
          수정
        </button>
        <button className="button-error" onClick={onDelete}>
          삭제
        </button>
      </td>
    </tr>
  );
};

export default AdminItem;
