import * as React from 'react';
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const navStyles = createUseStyles({
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
    fontSize: '1rem',
    color: '#0E2F43',
    fontWeight: '600',
    transition: '500ms all ease',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    background: 'none',
    '&:hover': {
      color: '#3597D4',
    }
  },
  arrow: {
    marginRights: '1rem',
    transition: '500ms all ease',
  }
})

const Navigation = () => {
  const classes = navStyles()
  return (
    <Link to="/" className={classes.link}>
      <button className={classes.button}>
        <ArrowBackIcon className={classes.arrow} />
        Retour
      </button>
    </Link>
  )
}

export default Navigation
