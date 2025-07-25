import axios, { AxiosError } from 'axios';
import axiosInstance from '@/config/axios';
import { Product } from '@/types';

export const productService = {
  // 모든 상품 조회
  async getProducts(): Promise<Product[]> {
    try {
      // 로그인/회원가입과 동일하게 프록시 사용
        const response = await axiosInstance.get<Product[]>('/products');
        console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch products:', error);
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          throw new Error(`상품 목록을 불러오는데 실패했습니다. (${axiosError.response.status})`);
        } else if (axiosError.request) {
          throw new Error('네트워크 연결을 확인해주세요.');
        }
      }
      throw new Error('상품 목록을 불러오는데 실패했습니다.');
    }
  },

  // 특정 상품 조회
  async getProduct(id: string): Promise<Product> {
    try {
      const response = await axiosInstance.get<Product>(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Failed to fetch product ${id}:`, error);
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          if (axiosError.response.status === 404) {
            throw new Error('상품을 찾을 수 없습니다.');
          }
          throw new Error(`상품 정보를 불러오는데 실패했습니다. (${axiosError.response.status})`);
        } else if (axiosError.request) {
          throw new Error('네트워크 연결을 확인해주세요.');
        }
      }
      throw new Error('상품 정보를 불러오는데 실패했습니다.');
    }
  },

  // 상품 생성
  async createProduct(product: Omit<Product, 'id'>): Promise<Product> {
    try {
      const response = await axiosInstance.post<Product>('/products', product);
      return response.data;
    } catch (error) {
      console.error('Failed to create product:', error);
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          const status = axiosError.response.status;
          switch (status) {
            case 400:
              throw new Error('입력한 상품 정보를 확인해주세요.');
            case 401:
              throw new Error('로그인이 필요합니다.');
            case 403:
              throw new Error('상품 생성 권한이 없습니다.');
            default:
              throw new Error(`상품 생성에 실패했습니다. (${status})`);
          }
        } else if (axiosError.request) {
          throw new Error('네트워크 연결을 확인해주세요.');
        }
      }
      throw new Error('상품 생성에 실패했습니다.');
    }
  },

  // 상품 업데이트
  async updateProduct(id: string, product: Partial<Product>): Promise<Product> {
    try {
      const response = await axiosInstance.put<Product>(`/products/${id}`, product);
      return response.data;
    } catch (error) {
      console.error(`Failed to update product ${id}:`, error);
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          const status = axiosError.response.status;
          switch (status) {
            case 400:
              throw new Error('입력한 상품 정보를 확인해주세요.');
            case 401:
              throw new Error('로그인이 필요합니다.');
            case 403:
              throw new Error('상품 수정 권한이 없습니다.');
            case 404:
              throw new Error('상품을 찾을 수 없습니다.');
            default:
              throw new Error(`상품 수정에 실패했습니다. (${status})`);
          }
        } else if (axiosError.request) {
          throw new Error('네트워크 연결을 확인해주세요.');
        }
      }
      throw new Error('상품 수정에 실패했습니다.');
    }
  },

  // 상품 삭제
  async deleteProduct(id: string): Promise<void> {
    try {
      await axiosInstance.delete(`/products/${id}`);
    } catch (error) {
      console.error(`Failed to delete product ${id}:`, error);
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          const status = axiosError.response.status;
          switch (status) {
            case 401:
              throw new Error('로그인이 필요합니다.');
            case 403:
              throw new Error('상품 삭제 권한이 없습니다.');
            case 404:
              throw new Error('상품을 찾을 수 없습니다.');
            default:
              throw new Error(`상품 삭제에 실패했습니다. (${status})`);
          }
        } else if (axiosError.request) {
          throw new Error('네트워크 연결을 확인해주세요.');
        }
      }
      throw new Error('상품 삭제에 실패했습니다.');
    }
  },
};