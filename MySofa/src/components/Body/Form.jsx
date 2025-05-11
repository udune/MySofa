import "../../styles/Form.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({ title, submitText, item, onSubmit }) => {
  const [input, setInput] = useState({
    name: "신제품",
    color: "gray",
    material: "fabric",
    size: "small",
    model: "a",
  });

  useEffect(() => {
    if (item) {
      setInput({ ...item });
    }
  }, [item]);

  const onChangeInput = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    let name = e.target.name;
    let value = e.target.value;

    setInput({ ...input, [name]: value });
  };

  const onClickSubmit = () => {
    onSubmit(input);
  };

  const nav = useNavigate();

  return (
    <div className="form">
      <span className="title_text">제품 {title}</span>
      <div className="content">
        <div className="form_group">
          <span className="form_label">제품 이름</span>
          <input
            type="text"
            name="name"
            className="form_input"
            value={input.name}
            onChange={onChangeInput}
          />
        </div>
        <div className="form_group">
          <span className="form_label">기본 색상</span>
          <select
            id=""
            name="color"
            className="form_select"
            onChange={onChangeInput}
          >
            <option value="gray">회색</option>
            <option value="beige">베이지색</option>
            <option value="black">검은색</option>
          </select>
        </div>
        <div className="form_group">
          <span className="form_label">기본 재질</span>
          <select
            id=""
            name="material"
            className="form_select"
            onChange={onChangeInput}
          >
            <option value="fabric">패브릭</option>
            <option value="leather">가죽</option>
          </select>
        </div>
        <div className="form_group">
          <span className="form_label">기본 사이즈</span>
          <select
            id=""
            name="size"
            className="form_select"
            onChange={onChangeInput}
          >
            <option value="small">소형</option>
            <option value="large">대형</option>
          </select>
        </div>
        <div className="form_group">
          <span className="form_label">기본 모델</span>
          <select
            id=""
            name="model"
            className="form_select"
            onChange={onChangeInput}
          >
            <option value="a">모델A</option>
            <option value="b">모델B</option>
          </select>
        </div>
        <div className="button_layout">
          <button
            type="submit"
            className="submit_button"
            onClick={onClickSubmit}
          >
            {submitText}
          </button>
          <button type="button" className="back_button" onClick={() => nav(-1)}>
            뒤로 가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
