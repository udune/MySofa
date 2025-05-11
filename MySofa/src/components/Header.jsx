import logo from "../assets/images/logo.png";
import "../styles/Header.css";
import HeaderButton from "./UI/HeaderButton";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
  const onClickLogout = () => {
    alert("로그아웃합니다");
  };

  return (
    <div className="header">
      <img
        src={logo}
        alt=""
        className="logo"
        onClick={() => {
          nav("/");
        }}
      />
      <div className="header_nav_container">
        <HeaderButton text="제품 페이지" link="/" />
        <HeaderButton text="마이 페이지" link="/my" />
        <HeaderButton text="관리자 페이지" link="/admin" />
        <HeaderButton text="로그아웃" onClick={onClickLogout} />
      </div>
    </div>
  );
};

export default Header;
