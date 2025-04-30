import "../styles/SignupPage.css";
import logo from "../assets/images/logo.png";

function SignupPage() {
  return (
    <div className="signup_container">
      <div className="signup_card">
        <div className="signup_logo">
          <img className="signup_logo_img" src={logo} alt="" />
        </div>
        <div className="signup_title">
          <span className="signup_title_text">회원가입</span>
        </div>
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
        <div className="signup_footer">
          이미 계정이 있으신가요? <span className="login_link">로그인</span>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
