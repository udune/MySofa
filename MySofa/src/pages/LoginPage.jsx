import "../styles/LoginPage.css";
import logo from "../assets/images/logo.png";

function LoginPage() {
  return (
    <div className="login_container">
      <div className="login_card">
        <div className="login_logo">
          <img src={logo} alt="" className="login_logo_img" />
        </div>
        <div className="login_title">
          <span className="login_title_text">로그인</span>
        </div>
        <form className="login_form">
          <input
            type="email"
            placeholder="이메일을 입력하세요"
            className="login_input"
          />
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            className="login_input"
          />
          <button type="submit" className="login_button">
            로그인
          </button>
        </form>
        <div className="login_footer">
          아직 회원이 아니신가요?{" "}
          <span to="SignupPage" className="signup_link">
            회원가입
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
