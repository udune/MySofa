import "../styles/signup.css";
import logo from "../assets/images/logo.png";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const onClickSignup = (e) => {
    e.preventDefault();
    console.log("check");
    axios
      .post("http://localhost:3000/tokens/phone", {
        number: "01068521259",
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <>
      <div className="signup">
        <div className="card">
          <div className="logo">
            <img className="logo_img" src={logo} alt="" />
          </div>
          <div className="title">
            <span className="title_text">회원가입</span>
          </div>
          <form className="form" onSubmit={onClickSignup}>
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
            <button className="button">회원가입</button>
          </form>
          <div className="footer">
            이미 계정이 있으신가요?{" "}
            <Link to="/" className="link">
              로그인
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
