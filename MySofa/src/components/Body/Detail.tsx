import "../../styles/Detail.css";
import { useState, useEffect } from "react";
import {
  getColor,
  getMaterial,
  getSize,
  getModelType,
} from "../../util/detailDesc.js";
import Thumbnail from "./Thumbnail.js";
import { DetailProps, Product } from "@/types/index.js";

const Detail: React.FC<DetailProps> = ({ submitText, item, onSubmit }) => {

  const [input, setInput] = useState<Product>({
    id: 0,
    name: "classicsofa",
    customName: "",
    color: "gray",
    material: "fabric",
    size: "small",
    modelType: "a",
  });

  useEffect(() => {
    if (item) {
      setInput({ ...item });
    }
  }, [item]);

  const onClickSubmit = (): void => {
    onSubmit(input);
  };

  return (
    <div className="detail">
      <div className="card">
        <Thumbnail
          style="detail_card_img"
          name={input.name}
          color={input.color}
          material={input.material}
          size={input.size}
          modelType={input.modelType}
        />
      </div>
      <div className="title">
        <span className="title_text">{input.customName}</span>
        <span className="subtitle_text">
          {getSize(input.size).value} | {getColor(input.color).value} |{" "}
          {getMaterial(input.material).value} |{" "}
          {getModelType(input.modelType).value}
        </span>
      </div>
      <div className="description">
        <span className="description_title_text">제품 소개</span>
        <span className="description_content_text">
          {getColor(input.color).desc} {getMaterial(input.material).desc}{" "}
          {getSize(input.size).desc}
        </span>
      </div>
      <button className="button" onClick={onClickSubmit}>
        {submitText}
      </button>
    </div>
  );
};

export default Detail;
