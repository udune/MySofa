import logo from "../assets/images/logo.png";
import "../styles/Header.css";
import HeaderButton from "./UI/HeaderButton";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const nav = useNavigate();
  const onClickLogout = (): void => {
    alert("로그아웃합니다");
  };

  return (
    <div className="header">
      <img
        src={logo}
        alt=""
        className="logo"
        onClick={() => {
          nav("/home");
        }}
      />
      <div className="header_nav_container">
        <HeaderButton text="제품 페이지" link="/home" />
        <HeaderButton text="마이 페이지" link="/home/my" />
        <HeaderButton text="관리자 페이지" link="/home/admin" />
        <HeaderButton text="로그아웃" link="/" onClick={onClickLogout}/>
      </div>
    </div>
  );
};

export default Header;
