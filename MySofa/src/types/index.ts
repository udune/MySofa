export interface Product {
  id: string;
  name: ProductName;
  custom_name: string;
  color: Color;
  material: Material;
  size: Size;
  model_type: ModelType;
}

export type ProductName =
  | "classicsofa"
  | "modularsofa"
  | "privatesofa"
  | "roungesofa";
export type Color = "gray" | "beige" | "black";
export type Material = "fabric" | "leather";
export type Size = "small" | "large";
export type ModelType = "a" | "b";

export interface ProductFormInput {
  name: ProductName;
  custom_name: string;
  color: Color;
  material: Material;
  size: Size;
  model_type: ModelType;
}

export interface DetailDescription {
  value: string;
  desc: string;
}

export interface ProductContextType {
  onCreate: (
    name: ProductName,
    custom_name: string,
    color: Color,
    material: Material,
    size: Size,
    model_type: ModelType
  ) => Promise<void>;
  onUpdate: (
    id: string,
    name: ProductName,
    custom_name: string,
    color: Color,
    material: Material,
    size: Size,
    model_type: ModelType
  ) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}

export interface MyItemContextType {
  onCreate: (product: Omit<Product, "id">) => Promise<void>;
  onUpdate: (id: string, product: Partial<Product>) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}

export interface ProductItemProps {
  item: Product;
}

export interface MyItemProps {
  item: Product;
  onDelete: () => void;
}

export interface AdminItemProps {
  index: number;
  item: Product;
  onDelete: () => void;
}

export interface ThumbnailProps {
  style: string;
  name: ProductName;
  color: Color;
  material: Material;
  size: Size;
  model_type: ModelType;
}

export interface FormProps {
  title: string;
  submitText: string;
  item?: Product;
  onSubmit: (item: ProductFormInput & { id?: string }) => void;
}

export interface DetailProps {
  submitText: string;
  item: Product;
  onSubmit: (item: Product) => void;
}

export interface ModalProps {
  message: string;
  confirmText: string;
  closeText: string;
  onConfirm: () => void;
  onClose: () => void;
}

export interface HeaderButtonProps {
  text: string;
  link: string;
  onClick?: () => void;
}

export interface CustomizationData {
  token: string;
  id?: string;
  name: ProductName;
  custom_name: string;
  color: Color;
  material: Material;
  size: Size;
  model_type: ModelType;
}
