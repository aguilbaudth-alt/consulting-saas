import crypto from "node:crypto";
import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { prisma } from "../lib/prisma";

export interface AccessTokenPayload {
  sub: string;
  email: string;
  role: string;
}

const hashToken = (token: string) => crypto.createHash("sha256").update(token).digest("hex");

export const signAccessToken = (payload: AccessTokenPayload) =>
  jwt.sign(payload, env.JWT_ACCESS_SECRET, {
    expiresIn: env.JWT_ACCESS_EXPIRES_IN as jwt.SignOptions["expiresIn"],
  });

export const verifyAccessToken = (token: string) =>
  jwt.verify(token, env.JWT_ACCESS_SECRET) as AccessTokenPayload & jwt.JwtPayload;

const parseExpiryToDate = (expiresIn: string): Date => {
  const match = /^(\d+)([smhd])$/.exec(expiresIn);
  if (!match) throw new Error(`Invalid expiry format: ${expiresIn}`);
  const [, amount, unit] = match;
  const multipliers = { s: 1000, m: 60_000, h: 3_600_000, d: 86_400_000 } as const;
  return new Date(Date.now() + Number(amount) * multipliers[unit as keyof typeof multipliers]);
};

export const issueRefreshToken = async (userId: string) => {
  const rawToken = crypto.randomBytes(64).toString("hex");
  const hashedToken = hashToken(rawToken);
  const expiresAt = parseExpiryToDate(env.JWT_REFRESH_EXPIRES_IN);

  await prisma.refreshToken.create({
    data: { userId, hashedToken, expiresAt },
  });

  return rawToken;
};

export const rotateRefreshToken = async (rawToken: string) => {
  const hashedToken = hashToken(rawToken);
  const existing = await prisma.refreshToken.findUnique({
    where: { hashedToken },
    include: { user: true },
  });

  if (!existing || existing.revokedAt || existing.expiresAt < new Date()) {
    return null;
  }

  await prisma.refreshToken.update({
    where: { id: existing.id },
    data: { revokedAt: new Date() },
  });

  const newRawToken = await issueRefreshToken(existing.userId);
  return { user: existing.user, refreshToken: newRawToken };
};

export const revokeRefreshToken = async (rawToken: string) => {
  const hashedToken = hashToken(rawToken);
  await prisma.refreshToken.updateMany({
    where: { hashedToken, revokedAt: null },
    data: { revokedAt: new Date() },
  });
};
