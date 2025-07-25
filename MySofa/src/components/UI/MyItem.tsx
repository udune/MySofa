import "../../styles/MyItem.css";
import { useNavigate } from "react-router-dom";
import Thumbnail from "../Body/Thumbnail";
import { MyItemProps } from "@/types";

const MyItem: React.FC<MyItemProps> = ({ item, onDelete }) => {
  const { id, name, custom_name, color, material, size, model_type } = item;
  const nav = useNavigate();

  return (
    <div className="myItem">
      <div className="content" onClick={() => nav(`/home/simulation/${id}`)}>
        <Thumbnail
          style="my_card_img"
          name={name}
          color={color}
          material={material}
          size={size}
          model_type={model_type}
        />
        <div className="item_name">
          <span className="item_name_text">{custom_name}</span>
        </div>
      </div>
      <button className="delete_button" onClick={onDelete}>
        삭제
      </button>
    </div>
  );
};

export default MyItem;
