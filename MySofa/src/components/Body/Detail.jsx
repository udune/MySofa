import "../../styles/Detail.css";
import test from "../../assets/images/test.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getColor, getMaterial, getSize } from "../../util/detailDesc.js";

const Detail = ({ submitText, item, onSubmit }) => {
  const nav = useNavigate();

  const [input, setInput] = useState({
    id: null,
    name: "",
    color: "",
    material: "",
    size: "",
    model: "",
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
      {/* <div
        className="back_button"
        onClick={() => {
          nav(-1);
        }}
      >
        {"<"}
      </div> */}
      <div className="card">
        <img src={test} alt="" className="card_img" />
      </div>
      <div className="title">
        <span className="title_text">{input.name}</span>
        <span className="subtitle_text">
          {getSize(input.size).value} | {getColor(input.color).value} |{" "}
          {getMaterial(input.material).value}
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
