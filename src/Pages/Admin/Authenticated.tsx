import { WebStorageStateStore } from 'oidc-client-ts';
import { AuthProvider, type AuthProviderProps } from 'react-oidc-context';
import { Outlet } from 'react-router-dom';

const oidcConfig: AuthProviderProps = {
  authority: import.meta.env.VITE_SSO_AUTHORITY,
  client_id: import.meta.env.VITE_SSO_CLIENT_ID,
  scope: 'openid profile email',
  redirect_uri: `${window.origin}/admin/login`,
  userStore: new WebStorageStateStore({ store: window.localStorage }),
  revokeTokensOnSignout: true,
};

const Authenticated = () => {
  return (
    <AuthProvider {...oidcConfig}>
      <Outlet />
    </AuthProvider>
  );
};

export default Authenticated;
