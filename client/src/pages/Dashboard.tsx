import { useAuth } from "../context/AuthContext";

export const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-900">Welcome back, {user?.name}</h1>
      <p className="mt-2 text-slate-600">
        Signed in as {user?.email} ({user?.role.toLowerCase()})
      </p>
    </div>
  );
};
