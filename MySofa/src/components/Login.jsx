import "../styles/Login.css";
import logo from "../assets/images/logo.png";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="logo">
          <img className="logo_img" src={logo} alt="" />
        </div>
        <div className="title">
          <span className="title_text">로그인</span>
        </div>
        <form className="form">
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
            로그인
          </button>
        </form>
        <div className="footer">
          아직 회원이 아니신가요?{" "}
          <span to="SignupPage" className="link">
            회원가입
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
