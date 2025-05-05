import test from "../assets/images/test.png";
import "../styles/My.css";

const My = () => {
  return (
    <div className="my">
      <div className="title">
        <span className="title_text">마이 페이지</span>
        <span className="subtitle_text">내가 저장한 커스텀 목록</span>
      </div>
      <div className="saved_list">
        <div className="saved_item">
          <img src={test} alt="" className="item_img" />
          <div className="item_name">
            <span className="item_name_text">2-Seater Sofa</span>
          </div>
          <button className="delete_button">삭제</button>
        </div>
        <div className="saved_item">
          <img src={test} alt="" className="item_img" />
          <div className="item_name">
            <span className="item_name_text">2-Seater Sofa</span>
          </div>
          <button className="delete_button">삭제</button>
        </div>
        <div className="saved_item">
          <img src={test} alt="" className="item_img" />
          <div className="item_name">
            <span className="item_name_text">2-Seater Sofa</span>
          </div>
          <button className="delete_button">삭제</button>
        </div>
      </div>
    </div>
  );
};

export default My;
