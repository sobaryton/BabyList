import { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { useAuth } from 'react-oidc-context';
import { useNavigate } from 'react-router-dom';
import {
  blue,
  lightBlue,
} from '../../utils/constants';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
  popup: {
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',
    width: '22rem',
    height: '30rem',
    border: 'solid',
    borderRadius: '2rem',
    padding: '2rem',
    boxShadow: `${lightBlue} 1rem 1rem 1rem`,
  },
  button: {
    display: "flex",
    gap: ".5rem",
    alignItems: "center",
    border: "none",
    borderRadius: ".5rem",
    padding: ".25rem 1rem",
    cursor: "pointer",

    fontSize: '1.25rem',

    backgroundColor: lightBlue,
    '&:hover': {
      backgroundColor: blue,
    },

    '& > img': {
      width: "3rem",
    }
  }
});

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const classes = useStyles();

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
    <div className={classes.container}>
      <div className={classes.popup}>
        <h1>Please sign in</h1>
        <button type="button" className={classes.button} onClick={authentikLogin}>
          <img src="https://authentik.nas.nseverin.fr:5001/static/dist/assets/icons/icon.png" alt="Authentik logo" />
          Sign in with Authentik
        </button>
      </div>
    </div>
  );
};

export default Login;
