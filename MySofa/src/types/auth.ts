export interface User {
    id: string;
    email: string;
    nickname: string;
    role: 'USER' | 'ADMIN';
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    message: string;
    accessToken: string;
    user: User;
}

export interface SignupRequest {
    nickname: string;
    email: string;
    password: string;
}

export interface SignupResponse {
    id: string;
    nickname: string;
    email: string;
    role: string;
    my_items: { id: string };
    custom_sessions: { id: string };
    created_at: string;
    updated_at: string;
}

export interface AuthContextType {
    user: User | null;
    accessToken: string | null;
    isLoading: boolean;
    login: (userData: User, token: string) => void;
    logout: () => void;
    isAuthenticated: () => boolean;
    isAdmin: () => boolean;
}