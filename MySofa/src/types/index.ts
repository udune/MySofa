export interface Product {
    id: number;
    name: ProductName;
    customName: string;
    color: Color;
    material: Material;
    size: Size;
    modelType: ModelType;
}

export type ProductName = 'classicsofa' | 'modularsofa' | 'privatesofa' | 'roungesofa';
export type Color = 'gray' | 'beige' | 'black';
export type Material = 'fabric' | 'leather';
export type Size = 'small' | 'large';
export type ModelType = 'a' | 'b';

export interface ProductFormInput {
    name: ProductName;
    customName: string;
    color: Color;
    material: Material;
    size: Size;
    modelType: ModelType;
}

export interface DetailDescription {
    value: string;
    desc: string;
}

export interface ProductContextType {
    onCreate: (name: ProductName, customName: string, color: Color, material: Material, size: Size, modelType: ModelType) => void;
    onUpdate: (id: number, name: ProductName, customName: string, color: Color, material: Material, size: Size, modelType: ModelType) => void;
    onDelete: (id: number) => void;
}

export interface MyItemContextType {
    onDelete: (id: number) => void;
}

export interface ProductItemProps {
    item: Product;
}

export interface MyItemProps {
    item: Product;
    onDelete: () => void;
}

export interface AdminItemProps {
    item: Product;
    onDelete: () => void;
}

export interface ThumbnailProps {
    style: string;
    name: ProductName;
    color: Color;
    material: Material;
    size: Size;
    modelType: ModelType;
}

export interface FormProps {
    title: string;
    submitText: string;
    item?: Product;
    onSubmit: (item: ProductFormInput & { id?: number }) => void;
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
    id?: number;
    name: ProductName;
    customName: string;
    color: Color;
    material: Material;
    size: Size;
    modelType: ModelType;
}