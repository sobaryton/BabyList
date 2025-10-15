import { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';
import { useNavigate } from 'react-router-dom';

const AuthentikLogin = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  // biome-ignore lint/correctness/useExhaustiveDependencies: capturing `auth` would lead to infinite loops.
  useEffect(() => {
    if (auth.isLoading) {
      return;
    }

    const login = async () => {
      if (!auth.isAuthenticated) {
        await auth.signinRedirect({
          redirect_uri: `${window.origin}/admin/login/authentik/callback`,
        });
      } else {
        await navigate('/admin');
      }
    };

    void login();
  }, [auth.isAuthenticated, auth.isLoading, navigate]);

  return <div>You are being redirected to Authentik...</div>;
};

export default AuthentikLogin;
