import axios, { AxiosError } from 'axios';
import axiosInstance from '@/config/axios';
import { Product } from '@/types';

export const myItemService = {
  // 내 아이템 목록 조회
  async getMyItems(): Promise<Product[]> {
    try {
      const response = await axiosInstance.get<Product[]>('/myitems');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch my items:', error);
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          const status = axiosError.response.status;
          switch (status) {
            case 401:
              throw new Error('로그인이 필요합니다.');
            case 403:
              throw new Error('내 아이템 조회 권한이 없습니다.');
            default:
              throw new Error(`내 아이템 목록을 불러오는데 실패했습니다. (${status})`);
          }
        } else if (axiosError.request) {
          throw new Error('네트워크 연결을 확인해주세요.');
        }
      }
      throw new Error('내 아이템 목록을 불러오는데 실패했습니다.');
    }
  },

  // 내 아이템 생성 (커스터마이징된 상품을 내 아이템으로 추가)
  async createMyItem(product: Omit<Product, 'id'>): Promise<Product> {
    try {
      const response = await axiosInstance.post<Product>('/myitems', product);
      return response.data;
    } catch (error) {
      console.error('Failed to create my item:', error);
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          const status = axiosError.response.status;
          switch (status) {
            case 400:
              throw new Error('입력한 아이템 정보를 확인해주세요.');
            case 401:
              throw new Error('로그인이 필요합니다.');
            case 403:
              throw new Error('내 아이템 생성 권한이 없습니다.');
            case 409:
              throw new Error('이미 존재하는 아이템입니다.');
            default:
              throw new Error(`내 아이템 생성에 실패했습니다. (${status})`);
          }
        } else if (axiosError.request) {
          throw new Error('네트워크 연결을 확인해주세요.');
        }
      }
      throw new Error('내 아이템 생성에 실패했습니다.');
    }
  },

  // 특정 내 아이템 상세 조회
  async getMyItem(id: string): Promise<Product> {
    try {
      const response = await axiosInstance.get<Product>(`/myitems/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Failed to fetch my item ${id}:`, error);
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          const status = axiosError.response.status;
          switch (status) {
            case 401:
              throw new Error('로그인이 필요합니다.');
            case 403:
              throw new Error('내 아이템 조회 권한이 없습니다.');
            case 404:
              throw new Error('내 아이템을 찾을 수 없습니다.');
            default:
              throw new Error(`내 아이템 정보를 불러오는데 실패했습니다. (${status})`);
          }
        } else if (axiosError.request) {
          throw new Error('네트워크 연결을 확인해주세요.');
        }
      }
      throw new Error('내 아이템 정보를 불러오는데 실패했습니다.');
    }
  },

  // 내 아이템 수정 (커스터마이징 변경)
  async updateMyItem(id: string, product: Partial<Product>): Promise<Product> {
    try {
      const response = await axiosInstance.patch<Product>(`/myitems/${id}`, product);
      return response.data;
    } catch (error) {
      console.error(`Failed to update my item ${id}:`, error);
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          const status = axiosError.response.status;
          switch (status) {
            case 400:
              throw new Error('입력한 아이템 정보를 확인해주세요.');
            case 401:
              throw new Error('로그인이 필요합니다.');
            case 403:
              throw new Error('내 아이템 수정 권한이 없습니다.');
            case 404:
              throw new Error('내 아이템을 찾을 수 없습니다.');
            default:
              throw new Error(`내 아이템 수정에 실패했습니다. (${status})`);
          }
        } else if (axiosError.request) {
          throw new Error('네트워크 연결을 확인해주세요.');
        }
      }
      throw new Error('내 아이템 수정에 실패했습니다.');
    }
  },

  // 내 아이템 삭제
  async deleteMyItem(id: string): Promise<void> {
    try {
      await axiosInstance.delete(`/myitems/${id}`);
    } catch (error) {
      console.error(`Failed to delete my item ${id}:`, error);
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          const status = axiosError.response.status;
          switch (status) {
            case 401:
              throw new Error('로그인이 필요합니다.');
            case 403:
              throw new Error('내 아이템 삭제 권한이 없습니다.');
            case 404:
              throw new Error('내 아이템을 찾을 수 없습니다.');
            default:
              throw new Error(`내 아이템 삭제에 실패했습니다. (${status})`);
          }
        } else if (axiosError.request) {
          throw new Error('네트워크 연결을 확인해주세요.');
        }
      }
      throw new Error('내 아이템 삭제에 실패했습니다.');
    }
  },
};