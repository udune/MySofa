import "../styles/Form.css";

const Form = () => {
  return (
    <div className="form">
      <span className="title_text">제품 추가(수정)</span>
      <div className="content">
        <div className="form_group">
          <span className="form_label">제품 이름</span>
          <input type="text" className="form_input" />
        </div>
        <div className="form_group">
          <span className="form_label">기본 색상</span>
          <select id="" className="form_select">
            <option value="Gray">회색</option>
            <option value="Beige">베이지색</option>
            <option value="Black">검은색</option>
          </select>
        </div>
        <div className="form_group">
          <span className="form_label">기본 재질</span>
          <select id="" className="form_select">
            <option value="Fabric">패브릭</option>
            <option value="Leather">가죽</option>
          </select>
        </div>
        <div className="form_group">
          <span className="form_label">기본 사이즈</span>
          <select id="" className="form_select">
            <option value="Small">소형</option>
            <option value="Big">대형</option>
          </select>
        </div>
        <div className="form_group">
          <span className="form_label">기본 모델</span>
          <select id="" className="form_select">
            <option value="ModelA">모델A</option>
            <option value="ModelB">모델B</option>
          </select>
        </div>
        <button type="submit" className="submit_button">
          저장(업데이트)
        </button>
      </div>
    </div>
  );
};

export default Form;
