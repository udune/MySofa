import "../styles/Login.css";
import logo from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { ChangeEvent, FormEvent, useState } from "react";
import { LoginRequest, LoginResponse } from "@/types/auth";
import axios, { AxiosError } from "axios";

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
      const loginRequest: LoginRequest = {
        email: formData.email,
        password: formData.password
      };

      // TODO: 개발 (프록시 사용)
      const response = await axios.post<LoginResponse>(
        "/api/auth/login",
        loginRequest
      );

      const { accessToken, user } = response.data;

      login(user, accessToken);

      nav("/home");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          const status = axiosError.response.status;
          switch (status) {
            case 401:
              setError("이메일 또는 비밀번호가 올바르지 않습니다.");
              break;
            case 400:
              setError("입력한 정보를 확인해주세요.");
              break;
            case 429:
              setError("너무 많은 로그인 시도입니다. 잠시 후 다시 시도해주세요.");
              break;
            case 500:
              setError("서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
              break;
            default:
              setError("로그인 중 오류가 발생했습니다.")
          }
        }
        else if (axiosError.request) {
          setError("네트워크 연결을 확인해주세요.")
        }
        else {
          setError("로그인 중 오류가 발생했습니다.")
        }
      }
      else {
          setError("알 수 없는 오류가 발생했습니다.")
      }
    } finally {
      setIsLoading(false);
    }
  }

    return (
      <div className="login">
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
