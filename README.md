# Consulting SaaS

Full-stack starter for a consulting platform: React (TypeScript + Tailwind) frontend, Express (TypeScript) backend, PostgreSQL via Prisma, JWT-based authentication with refresh-token rotation.

## Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, React Router
- **Backend**: Express, TypeScript, Prisma ORM
- **Database**: PostgreSQL
- **Auth**: JWT access tokens (in-memory on the client) + httpOnly refresh-token cookies, rotated on every refresh

## Prerequisites

- Node.js 20+ and npm
- Docker (for local PostgreSQL), or a PostgreSQL 16 instance you manage yourself

## Getting started

1. Install dependencies (from the repo root — this is an npm workspaces monorepo):

   ```bash
   npm install
   ```

2. Start PostgreSQL locally:

   ```bash
   docker compose up -d
   ```

3. Configure environment variables:

   ```bash
   cp server/.env.example server/.env
   cp client/.env.example client/.env
   ```

   Edit `server/.env` and replace `JWT_ACCESS_SECRET` / `JWT_REFRESH_SECRET` with strong random values, e.g.:

   ```bash
   openssl rand -base64 48
   ```

4. Run the database migrations:

   ```bash
   npm run db:migrate
   ```

5. Start both apps in dev mode:

   ```bash
   npm run dev
   ```

   - API: http://localhost:4000
   - Web app: http://localhost:5173 (proxies `/api` to the backend)

## Project structure

```
consulting-saas/
├── client/            # React + TypeScript + Tailwind (Vite)
│   └── src/
│       ├── api/       # Axios instance with auth-refresh interceptor
│       ├── context/   # AuthContext (session state, login/register/logout)
│       ├── components/ # Layout, ProtectedRoute
│       └── pages/      # Login, Register, Dashboard
├── server/            # Express + TypeScript API
│   ├── prisma/        # Prisma schema (User, RefreshToken)
│   └── src/
│       ├── routes/       # Route definitions
│       ├── controllers/  # Request handlers
│       ├── services/     # Auth + token business logic
│       ├── middleware/   # requireAuth, error handling, validation
│       └── config/       # Env parsing (zod-validated)
└── docker-compose.yml # Local PostgreSQL
```

## Authentication flow

- `POST /api/auth/register` / `POST /api/auth/login` return a short-lived JWT access token in the response body and set an httpOnly `refreshToken` cookie (scoped to `/api/auth`).
- The client keeps the access token in memory only (never in `localStorage`) and attaches it as `Authorization: Bearer <token>`.
- On a 401, the API client automatically calls `POST /api/auth/refresh`, which validates the refresh token, revokes it, and issues a new access/refresh pair (rotation) — then retries the original request once.
- `POST /api/auth/logout` revokes the current refresh token and clears the cookie.
- Passwords are hashed with bcrypt (12 salt rounds); refresh tokens are stored hashed (SHA-256) in Postgres, never in plaintext.

## Useful commands

| Command | Description |
| --- | --- |
| `npm run dev` | Run backend + frontend concurrently |
| `npm run build` | Build both workspaces for production |
| `npm run lint` | Lint both workspaces |
| `npm run db:migrate` | Run Prisma migrations (dev) |
| `npm run db:studio` | Open Prisma Studio |

## Production notes

- Set `NODE_ENV=production` and serve the built `client/dist` behind a static host or reverse proxy (e.g. Nginx) in front of the API.
- Terminate TLS in front of the API so the `secure` cookie flag (enabled automatically in production) takes effect.
- Run `npm run db:deploy` (via `prisma migrate deploy`) instead of `db:migrate` in production/CI — it applies existing migrations without prompting or generating new ones.
- Put the API behind a process manager (pm2, systemd) or a container orchestrator; it reads all configuration from environment variables.
