import { useAuth } from 'react-oidc-context';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthentikLogin = () => {
  const auth = useAuth();
  const navigate = useNavigate();

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
  }, [auth.isAuthenticated, auth.isLoading]);

  return (
    <>
      <div>You are being redirected to Authentik...</div>
    </>
  );
};

export default AuthentikLogin;
