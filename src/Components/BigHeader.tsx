import * as React from 'react';
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const headerStyles = createUseStyles({
  header: {
    width: '100%',
    height: '50vh',
    backgroundImage: 'url("bebe.jpg")',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '50vh',
    background: 'rgba(255,255,255,0.5)'
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
    marginBottom: '-2rem',
    zIndex: 10
  },
  button: {
    width: '22rem',
    height: '4rem',
    cursor: 'pointer',
    border: 'none',
    background: '#BCDDF1',
    fontSize: '2rem',
    color: '#4F5165',
    fontWeight: '600',
    transition: '500ms all ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      background: '#3597D4',
      color: 'white',
      '& svg': {
        marginLeft: '1.5rem'
      }
    }
  },
  arrow: {
    marginLeft: '1rem',
    transition: '500ms all ease',
  }
})

const BigHeader = () => {
  const classes = headerStyles()
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
}

export default BigHeader;
