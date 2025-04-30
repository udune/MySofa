import "../styles/MainPage.css";
import logo from "../assets/images/logo.png";
import test from "../assets/images/test.png";

const MainPage = () => {
  return (
    <div className="mainpage_container">
      <div className="mainpage_header">
        <div className="header_logo">
          <img src={logo} alt="" className="logo" />
        </div>
        <div className="header_nav_container">
          <div className="nav_item">
            <span className="item_text">제품 페이지</span>
          </div>
          <div className="nav_item">
            <span className="item_text">마이 페이지</span>
          </div>
          <div className="nav_item">
            <span className="item_text">로그아웃</span>
          </div>
        </div>
      </div>

      <div className="mainpage_body">
        <div className="body_title">
          <span className="title">소파를 선택해주세요</span>
        </div>
        <div className="product_grid">
          <div className="product_card">
            <img src={test} alt="" className="card_img" />
            <span className="card_text">2-Seater Sofa</span>
          </div>
          <div className="product_card">
            <img src={test} alt="" className="card_img" />
            <span className="card_text">Modern Armchair</span>
          </div>
          <div className="product_card">
            <img src={test} alt="" className="card_img" />
            <span className="card_text">2-Seater Sofa</span>
          </div>
          <div className="product_card">
            <img src={test} alt="" className="card_img" />
            <span className="card_text">Classic Armchair</span>
          </div>
        </div>
      </div>

      <div className="mainpage_footer">
        <span className="copy_text">© 2025 MySofa kim min chan</span>
      </div>
    </div>
  );
};

export default MainPage;
