import { useAuth } from "../context/AuthContext";

export const Login = () => {
  const { login } = useAuth();

  return (
    <div className="mx-auto max-w-sm text-center">
      <h1 className="mb-4 text-2xl font-semibold text-slate-900">Sign in</h1>
      <p className="mb-6 text-sm text-slate-600">
        Sign in securely through our authentication provider.
      </p>
      <button
        onClick={() => login()}
        className="w-full rounded-md bg-slate-900 px-3 py-2 text-white hover:bg-slate-800"
      >
        Continue to sign in
      </button>
    </div>
  );
};
