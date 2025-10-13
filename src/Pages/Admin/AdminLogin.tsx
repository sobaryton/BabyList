import { useAuth } from 'react-oidc-context';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const authentikLogin = async () => {
    await auth.signinPopup();

    await navigate('/admin');
  };

  return (
    <>
      <h1>Please login</h1>
      <button onClick={authentikLogin}>Login with Authentik</button>
    </>
  );
};

export default AdminLogin;
