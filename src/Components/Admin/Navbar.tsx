import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import MessageIcon from '@mui/icons-material/Message';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';
import { useAuth } from 'react-oidc-context';
import { Link, useNavigate } from 'react-router-dom';
import { darkBlue, darkGreen, darkRed, font20, lightBlue, lightGreen, lightRed } from '../../utils/constants';

const useStyle = createUseStyles({
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  btn: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    minHeight: '2rem',
    marginRight: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    transition: '500ms all ease',
    fontWeight: 600,
    fontSize: font20,
    padding: '0.5rem',
    '&:last-child': {
      marginRight: 0,
    },
  },
  btnIcon: {
    marginRight: '0.7rem',
  },
  greenBtn: {
    background: lightGreen,
    color: darkGreen,
    '&:hover': {
      background: darkGreen,
      color: lightGreen,
    },
  },
  blueBtn: {
    background: lightBlue,
    color: darkBlue,
    '&:hover': {
      background: darkBlue,
      color: lightBlue,
    },
  },
  redBtn: {
    background: lightRed,
    color: darkRed,
    '&:hover': {
      background: darkRed,
      color: lightRed,
    },
  },
});

const Navbar = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const classes = useStyle();

  const logout = async () => {
    void auth.revokeTokens(); //TODO: The promise is not awaited because it currently gets a CORS error, which should be fixed after https://github.com/goauthentik/authentik/pull/17233 is merged.
    await auth.removeUser();

    await navigate('/');
  };

  return (
    <div>
      <Link to="add" className={classes.link}>
        <button type="button" className={classNames(classes.btn, classes.greenBtn)}>
          <AddIcon className={classes.btnIcon} />
          Add Gift
        </button>
      </Link>
      <Link to="messages" className={classes.link}>
        <button type="button" className={classNames(classes.btn, classes.blueBtn)}>
          <MessageIcon className={classes.btnIcon} />
          View Messages
        </button>
      </Link>
      <button type="button" onClick={logout} className={classNames(classes.btn, classes.redBtn)}>
        <LogoutIcon className={classes.btnIcon} />
        Logout
      </button>
    </div>
  );
};

export default Navbar;
