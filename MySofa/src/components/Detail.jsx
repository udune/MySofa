import test from "../assets/images/test.png";
import "../styles/Detail.css";

const Detail = () => {
  return (
    <div className="detail">
      <div className="card">
        <img src={test} alt="" className="card_img" />
      </div>
      <div className="title">
        <span className="title_text">Modern 2-Seater Sofa</span>
        <span className="subtitle_text">2-Seater Sofa</span>
      </div>
      <div className="description">
        <span className="description_title_text">Description</span>
        <span className="description_content_text">
          A contemporary twoseater sofa with clean lines and comportable fabric
          upholstery. Features a modern design that suits various interior
          styles
        </span>
      </div>
      <button className="button">커스터마이징 해보기</button>
    </div>
  );
};

export default Detail;
