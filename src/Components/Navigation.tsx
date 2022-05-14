import * as React from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { darkBlue } from './constants'
import classNames from 'classnames'

const navStyles = createUseStyles({
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
    width: '9rem',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    width: '9rem',
    height: '4rem',
    cursor: 'pointer',
    border: 'none',
    fontSize: '1rem',
    color: darkBlue,
    fontWeight: '600',
    transition: '500ms all ease',
    background: 'none',
    '&:hover': {
      color: darkBlue,
    }
  },
  arrow: {
    marginRights: '1rem',
    transition: '500ms all ease',
  }
})

const Navigation = ({ className, link }: { className?: string, link?: string }) => {
  const classes = navStyles()
  return (
    <button className={classNames(classes.button, className)}>
      <Link to={link ? link : "/"} className={classes.link}>
        <ArrowBackIcon className={classes.arrow} />
        Retour
      </Link>
    </button>
  )
}

export default Navigation
