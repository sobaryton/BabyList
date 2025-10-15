import { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';
import { useNavigate } from 'react-router-dom';

const AuthentikLoginCallback = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const gotoAdmin = async () => {
      if (auth.isAuthenticated) {
        await navigate('/admin');
      }
    };

    void gotoAdmin();
  }, [auth.isAuthenticated, navigate]);

  return <div>Authenticating with Authentik...</div>;
};

export default AuthentikLoginCallback;
