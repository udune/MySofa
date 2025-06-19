import "../../styles/ProductItem.css";
import { useNavigate } from "react-router-dom";
import Thumbnail from "../Body/Thumbnail";

const ProductItem = ({ item }) => {
  const { id, name, customName, color, material, size, modelType } = item;
  const nav = useNavigate();

  return (
    <div className="productItem">
      <button className="card" onClick={() => nav(`/home/customization/${id}`)}>
        <Thumbnail
          style="product_card_img"
          name={name}
          color={color}
          material={material}
          size={size}
          modelType={modelType}
        />
        <span className="card_text">{customName}</span>
      </button>
    </div>
  );
};

export default ProductItem;
