import axios, { AxiosError } from 'axios';
import axiosInstance from '@/config/axios';
import { LoginRequest, LoginResponse, SignupRequest, SignupResponse } from '@/types/auth';

export const authService = {
  // 로그인
  async login(loginData: LoginRequest): Promise<LoginResponse> {
    try {
      const response = await axiosInstance.post<LoginResponse>(
        '/auth/login',
        loginData
      );
      return response.data;
    } catch (error) {
      console.error('Login failed:', error);
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          const status = axiosError.response.status;
          switch (status) {
            case 401:
              throw new Error('이메일 또는 비밀번호가 올바르지 않습니다.');
            case 400:
              throw new Error('입력한 정보를 확인해주세요.');
            case 429:
              throw new Error('너무 많은 로그인 시도입니다. 잠시 후 다시 시도해주세요.');
            case 500:
              throw new Error('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
            default:
              throw new Error('로그인 중 오류가 발생했습니다.');
          }
        } else if (axiosError.request) {
          throw new Error('네트워크 연결을 확인해주세요.');
        }
      }
      throw new Error('로그인 중 오류가 발생했습니다.');
    }
  },

  // 회원가입
  async signup(signupData: SignupRequest): Promise<SignupResponse> {
    try {
      const response = await axiosInstance.post<SignupResponse>(
        '/users',
        signupData
      );
      return response.data;
    } catch (error) {
      console.error('Signup failed:', error);
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          const status = axiosError.response.status;
          switch (status) {
            case 400:
              throw new Error('입력한 정보를 확인해주세요.');
            case 409:
              throw new Error('이미 존재하는 이메일입니다.');
            case 500:
              throw new Error('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
            default:
              throw new Error('회원가입 중 오류가 발생했습니다.');
          }
        } else if (axiosError.request) {
          throw new Error('네트워크 연결을 확인해주세요.');
        }
      }
      throw new Error('회원가입 중 오류가 발생했습니다.');
    }
  },

  // 로그아웃 (필요시 서버에 로그아웃 요청)
  async logout(): Promise<void> {
    try {
      // 서버에 로그아웃 요청이 필요한 경우
      await axiosInstance.post('/auth/logout');
      
      // 로컬 스토리지 정리는 AuthContext에서 처리
    } catch (error) {
      console.error('Logout failed:', error);
      // 로그아웃은 실패해도 로컬 상태는 정리해야 함
    }
  },

  // 토큰 갱신 (필요시)
  async refreshToken(): Promise<string> {
    try {
      const response = await axiosInstance.post<{ accessToken: string }>('/auth/refresh');
      return response.data.accessToken;
    } catch (error) {
      console.error('Token refresh failed:', error);
      throw new Error('토큰 갱신에 실패했습니다.');
    }
  },
};