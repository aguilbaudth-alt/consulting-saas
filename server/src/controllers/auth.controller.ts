import { Request, Response } from "express";
import { env } from "../config/env";
import { loginUser, registerUser } from "../services/auth.service";
import { revokeRefreshToken, rotateRefreshToken, signAccessToken } from "../services/token.service";
import { ApiError } from "../utils/ApiError";

const REFRESH_COOKIE = "refreshToken";

const refreshCookieOptions = {
  httpOnly: true,
  secure: env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/api/auth",
};

export const register = async (req: Request, res: Response) => {
  const { accessToken, refreshToken } = await registerUser(req.body);
  res.cookie(REFRESH_COOKIE, refreshToken, refreshCookieOptions);
  res.status(201).json({ accessToken });
};

export const login = async (req: Request, res: Response) => {
  const { accessToken, refreshToken } = await loginUser(req.body);
  res.cookie(REFRESH_COOKIE, refreshToken, refreshCookieOptions);
  res.json({ accessToken });
};

export const refresh = async (req: Request, res: Response) => {
  const rawToken = req.cookies?.[REFRESH_COOKIE];
  if (!rawToken) {
    throw ApiError.unauthorized("Missing refresh token");
  }

  const result = await rotateRefreshToken(rawToken);
  if (!result) {
    res.clearCookie(REFRESH_COOKIE, refreshCookieOptions);
    throw ApiError.unauthorized("Invalid or expired refresh token");
  }

  const accessToken = signAccessToken({
    sub: result.user.id,
    email: result.user.email,
    role: result.user.role,
  });

  res.cookie(REFRESH_COOKIE, result.refreshToken, refreshCookieOptions);
  res.json({ accessToken });
};

export const logout = async (req: Request, res: Response) => {
  const rawToken = req.cookies?.[REFRESH_COOKIE];
  if (rawToken) {
    await revokeRefreshToken(rawToken);
  }
  res.clearCookie(REFRESH_COOKIE, refreshCookieOptions);
  res.status(204).send();
};
