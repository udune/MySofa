import logo from "../assets/images/logo.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
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
          <span className="item_text">관리자 페이지</span>
        </div>
        <div className="nav_item">
          <span className="item_text">로그아웃</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
