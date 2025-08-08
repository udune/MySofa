import "../styles/auth.css";
import logo from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { ChangeEvent, FormEvent, useState } from "react";
import { authService } from "@/services/authService";

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const nav = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) {
      setError("");
    }
  }

  const onSubmitLogin = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await authService.login({
        email: formData.email,
        password: formData.password
      });

      const { accessToken, user } = response;
      login(user, accessToken);
      nav("/home");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("알 수 없는 오류가 발생했습니다.");
      }
    } finally {
      setIsLoading(false);
    }
  }

    return (
      <div className="auth">
        <div className="card">
          <div className="logo">
            <img className="logo_img" src={logo} alt="MySofa Logo" />
          </div>
          <div className="title">
            <span className="title_text">로그인</span>
          </div>
          <form className="form" onSubmit={onSubmitLogin}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="이메일을 입력하세요"
              className="input"
              disabled={isLoading}
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="비밀번호를 입력하세요"
              className="input"
              disabled={isLoading}
              required
            />
            {error && (
              <div style={{
                color: '#ff4444',
                fontSize: '1.3rem',
                textAlign: 'center',
                marginTop: '0.5rem'
              }}>
                {error}
              </div>
            )}
            <button
              type="submit"
              className="button"
              disabled={isLoading}
              style={{
                opacity: isLoading ? 0.7 : 1,
                cursor: isLoading ? 'not-allowed' : 'pointer'
              }}>
              {isLoading ? "로그인 중..." : "로그인"}
            </button>
          </form>
          <div className="footer">
            아직 회원이 아니신가요?{" "}
            <Link to="/signup" className="link">
              회원가입
            </Link>
          </div>
        </div>
      </div>
    );
  };

export default Login;
