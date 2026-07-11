export type Role = "ADMIN" | "CONSULTANT" | "CLIENT";

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
  createdAt: string;
}

export interface AuthResponse {
  accessToken: string;
}
