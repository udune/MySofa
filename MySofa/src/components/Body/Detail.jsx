import "../../styles/Detail.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getColor,
  getMaterial,
  getSize,
  getModelType,
} from "../../util/detailDesc.js";
import Thumbnail from "./Thumbnail.jsx";

const Detail = ({ submitText, item, onSubmit }) => {
  const nav = useNavigate();

  const [input, setInput] = useState({
    id: null,
    name: "",
    customName: "",
    color: "",
    material: "",
    size: "",
    modelType: "",
  });

  useEffect(() => {
    if (item) {
      setInput({ ...item });
    }
  }, [item]);

  const onClickSubmit = () => {
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
