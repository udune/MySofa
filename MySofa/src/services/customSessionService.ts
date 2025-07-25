import axios, { AxiosError } from 'axios';
import axiosInstance from '@/config/axios';
import { CustomSessionRequest, CustomSessionResponse } from '../types/customSession';

export const customSessionService = {
    // 커스텀 세션 생성
    async createCustomSession(sessionData: CustomSessionRequest): Promise<CustomSessionResponse> {
        try {
            const response = await axiosInstance.post<CustomSessionResponse>(
                '/custom-session',
                sessionData
            );
            return response.data;
        } catch (error) {
            console.error('Custom session creation failed:', error);
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError;
                if (axiosError.response) {
                    const status = axiosError.response.status;
                    switch (status) {
                        case 400:
                            throw new Error('입력한 세션 정보를 확인해주세요.');
                        case 401:
                            throw new Error('로그인이 필요합니다.');
                        case 403:
                            throw new Error('커스텀 세션 생성 권한이 없습니다.');
                        case 409:
                            throw new Error('이미 존재하는 세션입니다.');
                        case 429:
                            throw new Error('너무 많은 세션 생성 요청입니다. 잠시 후 다시 시도해주세요.');
                        case 500:
                            throw new Error('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
                        default:
                            throw new Error(`커스텀 세션 생성에 실패했습니다. (${status})`);
                    }
                } else if (axiosError.request) {
                    throw new Error('네트워크 연결을 확인해주세요.');
                }
            }
            throw new Error('커스텀 세션 생성에 실패했습니다.');
        }
    },
}