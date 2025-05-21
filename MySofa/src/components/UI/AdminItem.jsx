import "../../styles/AdminItem.css";

import { useNavigate } from "react-router-dom";

import { getColor, getMaterial, getSize } from "../../util/detailDesc.js";

const AdminItem = ({ item, onDelete }) => {
  const { id, name, color, material, size } = item;
  const nav = useNavigate();

  return (
    <tr className="adminItem">
      <td className="table_data_id">{id}</td>
      <td className="table_data_name">{name}</td>
      <td className="table_data_type">
        {getColor(color).value}|{getMaterial(material).value}|
        {getSize(size).value}
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
