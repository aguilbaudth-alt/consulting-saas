import { useState } from "react";

interface ClientLogoProps {
  name: string;
  logo: string;
  className?: string;
}

export const ClientLogo = ({ name, logo, className = "" }: ClientLogoProps) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className={`text-center text-sm font-semibold uppercase tracking-wide text-slate-500 ${className}`}
      >
        {name}
      </span>
    );
  }

  return (
    <img
      src={logo}
      alt={name}
      className={`max-h-full max-w-full object-contain ${className}`}
      onError={() => setFailed(true)}
    />
  );
};
