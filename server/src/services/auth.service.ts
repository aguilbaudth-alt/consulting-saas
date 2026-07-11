import bcrypt from "bcrypt";
import { prisma } from "../lib/prisma";
import { ApiError } from "../utils/ApiError";
import { issueRefreshToken, signAccessToken } from "./token.service";

const SALT_ROUNDS = 12;

export const registerUser = async (params: { email: string; password: string; name: string }) => {
  const existing = await prisma.user.findUnique({ where: { email: params.email } });
  if (existing) {
    throw ApiError.conflict("An account with this email already exists");
  }

  const passwordHash = await bcrypt.hash(params.password, SALT_ROUNDS);
  const user = await prisma.user.create({
    data: { email: params.email, passwordHash, name: params.name },
  });

  return issueSession(user.id, user.email, user.role);
};

export const loginUser = async (params: { email: string; password: string }) => {
  const user = await prisma.user.findUnique({ where: { email: params.email } });
  if (!user) {
    throw ApiError.unauthorized("Invalid email or password");
  }

  const passwordMatches = await bcrypt.compare(params.password, user.passwordHash);
  if (!passwordMatches) {
    throw ApiError.unauthorized("Invalid email or password");
  }

  return issueSession(user.id, user.email, user.role);
};

const issueSession = async (userId: string, email: string, role: string) => {
  const accessToken = signAccessToken({ sub: userId, email, role });
  const refreshToken = await issueRefreshToken(userId);
  return { accessToken, refreshToken };
};
