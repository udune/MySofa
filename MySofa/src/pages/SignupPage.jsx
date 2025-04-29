import "../styles/SignupPage.css";
import logo from "../assets/logo.png";

function SignupPage() {
  return (
    <div className="signup_container">
      <div className="signup_card">
        <img className="signup_logo" src={logo} alt="" />
        <h2 className="signup_title">회원가입</h2>
        <form className="signup_form">
          <input
            type="text"
            placeholder="닉네임을 입력하세요"
            className="signup_input"
          />
          <input
            type="email"
            placeholder="이메일을 입력하세요"
            className="signup_input"
          />
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            className="signup_input"
          />
          <button type="submit" className="signup_button">
            회원가입
          </button>
        </form>
        <p className="signup_footer">
          이미 계정이 있으신가요? <span className="login_link">로그인</span>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
