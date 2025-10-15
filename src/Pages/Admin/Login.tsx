import { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';
import { useNavigate } from 'react-router-dom';

const Login = () => {
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

  const authentikLogin = async () => {
    await auth.signinPopup();

    await navigate('/admin');
  };

  return (
    <>
      <h1>Please login</h1>
      <button type="button" onClick={authentikLogin}>
        Login with Authentik
      </button>
    </>
  );
};

export default Login;
