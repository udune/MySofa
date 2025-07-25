import { ProductName, Color, Material, Size, ModelType } from './index';

// 커스텀 세션 요청 타입
export interface CustomSessionRequest {
  user_id: string | undefined;
  product_id: string;
  name: ProductName;
  custom_name: string;
  color: Color;
  material: Material;
  size: Size;
  model_type: ModelType;
}

// 커스텀 세션 응답 타입
export interface CustomSessionResponse {
  id: string;
  user_id: string;
  product_id: string;
  name: ProductName;
  custom_name: string;
  color: Color;
  material: Material;
  size: Size;
  model_type: ModelType;
  created_at?: string;
  updated_at?: string;
}