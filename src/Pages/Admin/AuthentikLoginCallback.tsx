import { useAuth } from 'react-oidc-context';
import { useEffect } from 'react';
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
  }, [auth.isAuthenticated]);

  return (
    <>
      <div>Authenticating with Authentik...</div>
    </>
  );
};

export default AuthentikLoginCallback;
