import "../styles/signup.css";
import logo from "../assets/images/logo.png";

const Signup = () => {
  return (
    <div className="signup">
      <div className="card">
        <div className="logo">
          <img className="logo_img" src={logo} alt="" />
        </div>
        <div className="title">
          <span className="title_text">회원가입</span>
        </div>
        <form className="form">
          <input
            type="text"
            placeholder="닉네임을 입력하세요"
            className="input"
          />
          <input
            type="email"
            placeholder="이메일을 입력하세요"
            className="input"
          />
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            className="input"
          />
          <button type="submit" className="button">
            회원가입
          </button>
        </form>
        <div className="footer">
          이미 계정이 있으신가요? <span className="link">로그인</span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
