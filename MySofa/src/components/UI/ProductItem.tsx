import React from 'react';
import "../../styles/ProductItem.css";
import { useNavigate } from "react-router-dom";
import Thumbnail from "../Body/Thumbnail.tsx";
import type { ProductItemProps } from "@/types";

const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
  const { id, name, custom_name, color, material, size, model_type } = item;
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
          model_type={model_type}
        />
        <span className="card_text">{custom_name}</span>
      </button>
    </div>
  );
};

export default ProductItem;
