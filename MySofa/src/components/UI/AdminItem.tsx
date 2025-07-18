import "../../styles/AdminItem.css";

import { useNavigate } from "react-router-dom";

import {
  getColor,
  getMaterial,
  getModelType,
  getSize,
} from "../../util/detailDesc.js";
import { AdminItemProps } from "@/types/index.js";

const AdminItem: React.FC<AdminItemProps> = ({ item, onDelete }) => {
  const { id, name, customName, color, material, size, modelType } = item;
  const nav = useNavigate();

  console.log(name);

  return (
    <tr className="adminItem">
      <td className="table_data_id">{id}</td>
      <td className="table_data_name">{customName}</td>
      <td className="table_data_type">
        {getColor(color).value}|{getMaterial(material).value}|
        {getSize(size).value}|{getModelType(modelType).value}
      </td>
      <td className="table_data_buttons">
        <button className="edit_button" onClick={() => nav(`/home/edit/${id}`)}>
          수정
        </button>
        <button className="delete_button" onClick={onDelete}>
          삭제
        </button>
      </td>
    </tr>
  );
};

export default AdminItem;
