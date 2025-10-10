import * as React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { darkBlue, font32, lightBlue } from '../../utils/constants';

const headerStyles = createUseStyles({
  header: {
    width: '100%',
    height: '50vh',
    backgroundImage: `url('/images/bebe.jpg')`,
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '50vh',
    background: 'rgba(255,255,255,0.5)',
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
    marginBottom: '-2rem',
    zIndex: 10,
  },
  button: {
    width: '22rem',
    height: '4rem',
    cursor: 'pointer',
    border: 'none',
    background: lightBlue,
    fontSize: font32,
    color: darkBlue,
    fontWeight: '600',
    transition: '500ms all ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      background: darkBlue,
      color: lightBlue,
    },
  },
  arrow: {
    marginLeft: '1rem',
    transition: '500ms all ease',
  },
});

const BigHeader = () => {
  const classes = headerStyles();
  return (
    <div className={classes.header}>
      <div className={classes.overlay}></div>
      <Link to="/list" className={classes.link}>
        <button className={classes.button}>
          Accéder à la liste
          <ArrowForwardIcon className={classes.arrow} />
        </button>
      </Link>
    </div>
  );
};

export default BigHeader;
