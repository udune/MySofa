import test from "../../assets/images/test.png";
import "../../styles/MyItem.css";
import { useNavigate } from "react-router-dom";

const MyItem = ({ item, onDelete }) => {
  const { id, name, color, material, size, model } = item;
  const nav = useNavigate();

  return (
    <div className="myItem">
      <div className="content" onClick={() => nav(`/home/simulation/${id}`)}>
        <img src={test} alt="" className="item_img" />
        <div className="item_name">
          <span className="item_name_text">{name}</span>
        </div>
      </div>
      <button className="delete_button" onClick={onDelete}>
        삭제
      </button>
    </div>
  );
};

export default MyItem;
