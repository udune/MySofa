import "../styles/signup.css";
import logo from "../assets/images/logo.png";
import axios, { AxiosError } from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { SignupRequest } from "@/types/auth";
import Toast from "./UI/Toast";
import "../styles/toast.css"

interface SignupData {
  nickname: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const nav = useNavigate();
  const [isToast, setIsToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [formData, setFormData] = useState<SignupData>({
    nickname: "",
    email: "",
    password: "",
  })
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

  const onSubmitSignup = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!formData.nickname || !formData.email || !formData.password) {
      setError("모든 필드를 입력해주세요.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const signupRequest: SignupRequest = {
        nickname: formData.nickname,
        email: formData.email,
        password: formData.password,
      }

      // TODO: 개발 (프록시 사용)
      await axios.post('/api/users', signupRequest)

      setToastMessage(`${formData.nickname}님 반가워요!`);
      setIsToast(true);
      setIsSuccess(true);

      setTimeout(() => {
        nav("/");
      }, 3000)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          const status = axiosError.response.status;
          switch (status) {
            case 400:
              setError("입력한 정보를 확인해주세요.");
              break;
            case 409:
              setError("이미 존재하는 이메일입니다.");
              break;
            case 500:
              setError("서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
              break;
            default:
              setError("회원가입 중 오류가 발생했습니다.");
          }
        } else if (axiosError.request) {
          setError("네트워크 연결을 확인해주세요.");
        } else {
          setError("회원가입 중 오류가 발생했습니다.");
        }
      } else {
        setError("알 수 없는 오류가 발생했습니다.");
      }

      setFormData(prev => ({
        ...prev,
        password: ""
      }))

    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isToast && (
        <Toast
          message={toastMessage}
          onClose={() => setIsToast(false)}
        />
      )}
      <div className="signup">
        <div className="card">
          <div className="logo">
            <img className="logo_img" src={logo} alt="MySofa Logo" />
          </div>
          <div className="title">
            <span className="title_text">회원가입</span>
          </div>
          <form className="form" onSubmit={onSubmitSignup}>
            <input
              type="text"
              name="nickname"
              value={formData.nickname}
              onChange={handleInputChange}
              placeholder="닉네임을 입력하세요"
              className="input"
              disabled={isLoading || isSuccess}
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="이메일을 입력하세요"
              className="input"
              disabled={isLoading || isSuccess}
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="비밀번호를 입력하세요"
              className="input"
              disabled={isLoading || isSuccess}
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
              disabled={isLoading || isSuccess}
              style={{
                opacity: isLoading || isSuccess ? 0.7 : 1,
                cursor: isLoading || isSuccess ? 'not-allowed' : 'pointer'
              }}>
              {isLoading ? "회원가입 중..." : isSuccess ? "로그인 페이지로 이동 중..." : "회원가입"}
              </button>
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
