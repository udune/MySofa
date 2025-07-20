import { AuthContextType, User } from "@/types/auth";
import { createContext, ReactNode, useContext, useEffect, useState } from "react"

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const savedToken = localStorage.getItem("accessToken");
        const savedUser = localStorage.getItem("user");

        if (savedToken && savedUser) {
            try {
                const parsedUser: User = JSON.parse(savedUser);
                setAccessToken(savedToken);
                setUser(parsedUser);
            } catch (error) {
                localStorage.removeItem("accessToken");
                localStorage.removeItem("user");
            }
        }
        setIsLoading(false);
    }, []);

    const login = (userData: User, token: string) => {
        setUser(userData);
        setAccessToken(token);
        localStorage.setItem("accessToken", token);
        localStorage.setItem("user", JSON.stringify(userData));
    }

    const logout = (): void => {
        setUser(null);
        setAccessToken(null);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
    }

    const isAuthenticated = (): boolean => {
        return !!user && !!accessToken;
    }

    const isAdmin = (): boolean => {
        return user?.role === "ADMIN";
    }

    const value: AuthContextType = {
        user,
        accessToken,
        isLoading,
        login,
        logout,
        isAuthenticated,
        isAdmin,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}