import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const Layout = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold text-slate-900">LEANOVEX Consulting</span>
          {user && (
            <div className="flex items-center gap-4 text-sm text-slate-600">
              <span>{user.name}</span>
              <button
                onClick={logout}
                className="rounded-md border border-slate-300 px-3 py-1.5 hover:bg-slate-100"
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
};
