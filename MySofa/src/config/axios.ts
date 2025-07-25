import axios from "axios";

const isProduction = window.location.hostname === 'my-sofa.org';

// axios 인스턴스를 생성한다.
const axiosInstance = axios.create({
    // 개발환경에서는 프록시를 사용한다.
    // 실제 운영은 https://api.my-sofa.org
    baseURL: isProduction ? 'https://api.my-sofa.org' : '/api',
    timeout: 10000
})

// JWT를 자동으로 헤더에 추가한다.
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 응답 처리를 한다. 401 에러 시에 로그아웃 처리를 한다.
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response?.status === 401) {
            // localStorage에 저장된 토큰을 삭제한다.
            if (window.location.pathname !== '/') {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('user');
                window.location.href = '/';
            }
        }
        return Promise.reject(error);
    }
)

export default axiosInstance;