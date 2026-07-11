import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const MarketingLayout = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link to="/" className="text-lg font-semibold text-blue-900">
            LEANOVEX Consulting
          </Link>
          {user ? (
            <div className="flex items-center gap-4 text-sm text-slate-600">
              <span>Welcome, {user.name.split(" ")[0]}</span>
              <button
                onClick={logout}
                className="rounded-md border border-slate-300 px-3 py-1.5 transition hover:bg-slate-100"
              >
                Sign out
              </button>
            </div>
          ) : (
            <Link to="/login" className="text-sm font-medium text-slate-500 hover:text-blue-800">
              Already a client? Sign in
            </Link>
          )}
        </div>
      </header>

      <Outlet />

      <footer className="bg-slate-950 py-10 text-slate-400">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm">
          <p className="font-semibold text-slate-200">LEANOVEX Consulting</p>
          <p className="mt-2">Supplier quality audits &amp; sourcing risk consulting across Asia</p>
          <p className="mt-4">&copy; {new Date().getFullYear()} LEANOVEX Consulting. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
