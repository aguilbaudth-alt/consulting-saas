import { useAuth } from "../context/AuthContext";

export const Register = () => {
  const { register } = useAuth();

  return (
    <div className="mx-auto max-w-sm text-center">
      <h1 className="mb-4 text-2xl font-semibold text-slate-900">Create your account</h1>
      <p className="mb-6 text-sm text-slate-600">
        Create your account securely through our authentication provider.
      </p>
      <button
        onClick={() => register()}
        className="w-full rounded-md bg-slate-900 px-3 py-2 text-white hover:bg-slate-800"
      >
        Continue to sign up
      </button>
    </div>
  );
};
