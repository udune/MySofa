import "../styles/LoginPage.css";
import logo from "../assets/logo.png";

function LoginPage() {
  return (
    <div className="login_container">
      <div className="login_card">
        <img src={logo} alt="" className="login_logo" />
        <h2 className="login_title">로그인</h2>
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
        <p className="login_footer">
          아직 회원이 아니신가요?{" "}
          <span to="SignupPage" className="signup_link">
            회원가입
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
