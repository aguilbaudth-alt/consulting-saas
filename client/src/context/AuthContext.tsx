import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api, setAccessToken } from "../api/client";
import { User } from "../types";

interface AuthContextValue {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCurrentUser = async () => {
    const { data } = await api.get<{ user: User }>("/users/me");
    setUser(data.user);
  };

  useEffect(() => {
    const restoreSession = async () => {
      try {
        const { data } = await api.post<{ accessToken: string }>("/auth/refresh");
        setAccessToken(data.accessToken);
        await fetchCurrentUser();
      } catch {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    restoreSession();
  }, []);

  const login = async (email: string, password: string) => {
    const { data } = await api.post<{ accessToken: string }>("/auth/login", { email, password });
    setAccessToken(data.accessToken);
    await fetchCurrentUser();
  };

  const register = async (email: string, password: string, name: string) => {
    const { data } = await api.post<{ accessToken: string }>("/auth/register", {
      email,
      password,
      name,
    });
    setAccessToken(data.accessToken);
    await fetchCurrentUser();
  };

  const logout = async () => {
    await api.post("/auth/logout");
    setAccessToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
};
