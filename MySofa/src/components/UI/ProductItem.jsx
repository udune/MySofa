import "../../styles/ProductItem.css";
import test from "../../assets/images/test.png";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ item }) => {
  const { id, name, color, material, size, model } = item;
  const nav = useNavigate();

  return (
    <div className="productItem">
      <button className="card" onClick={() => nav(`/customization/${id}`)}>
        <img src={test} alt="" className="card_img" />
        <span className="card_text">{name}</span>
      </button>
    </div>
  );
};

export default ProductItem;
