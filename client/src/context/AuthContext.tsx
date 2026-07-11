import { ReactNode } from "react";
import { AppState, Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState?: AppState) => {
    navigate(appState?.returnTo ?? "/", { replace: true });
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export const useAuth = () => {
  const { user, isLoading, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return {
    user: isAuthenticated && user ? { name: user.name ?? user.email ?? "there" } : null,
    isLoading,
    login: () => loginWithRedirect(),
    register: () => loginWithRedirect({ authorizationParams: { screen_hint: "signup" } }),
    logout: () => logout({ logoutParams: { returnTo: window.location.origin } }),
  };
};
