import { useAuth } from "@/contexts/AuthContext";
import logo from "../assets/images/logo.png";
import "../styles/Header.css";
import HeaderButton from "./UI/HeaderButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "./UI/Modal";
import { authService } from "@/services/authService";

const Header: React.FC = () => {
  const nav = useNavigate();
  const { user, logout, isAdmin } = useAuth();
  const [isModal, setIsModal] = useState<boolean>(false);

  const onClickLogout = (): void => {
    setIsModal(true);
  };

  const confirm = (): void => {
    authService.logout();
    logout();
    nav("/");
    close();
  }

  const close = (): void => {
    setIsModal(false);
  }

  return (
    <>
      {isModal && (
        <Modal
          message="정말 로그아웃하시겠어요?"
          confirmText={"네"}
          closeText={"아니요"}
          onConfirm={confirm}
          onClose={close}
        />
      )}
    <div className="header">
      <img
        src={logo}
        alt="MySofa Logo"
        className="logo"
        onClick={() => {
          nav("/home");
        }}
      />
      <div className="header_nav_container">
        <HeaderButton text="제품 페이지" link="/home" />
          <HeaderButton text="마이 페이지" link="/home/my" />
          {isAdmin() && (
            <HeaderButton text="관리자 페이지" link="/home/admin" />
          )}
          <div className="header_user_info">
            {user && (
              <span style={{
                fontSize: '1.4rem',
                color: '#666',
                marginRight: '1rem',
                fontFamily: 'Cafe24surround'
              }}>
                {user.nickname}님
              </span>
            )}
            <HeaderButton text="로그아웃" link="" onClick={onClickLogout}/>
          </div>
      </div>
    </div>
    </>
  );
};

export default Header;
