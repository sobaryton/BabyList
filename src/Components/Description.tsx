import * as React from 'react'
import { createUseStyles } from 'react-jss'
import { lightBlue, darkBlue, font20 } from './constants'
import SearchIcon from '@mui/icons-material/Search'
import Navigation from './Navigation'
import Header from './Header'

const cardStyles = createUseStyles({
  page: {
    position: 'relative'
  },
  main: {
    padding: '2rem 0.5rem'
  },
  navigation: {
    maxWidth: '25rem'
  },
  btn: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '7.5rem',
    minHeight: '2rem',
    marginRight: '0.5rem',
    background: lightBlue,
    color: darkBlue,
    border: 'none',
    cursor: 'pointer',
    transition: '500ms all ease',
    fontWeight: 600,
    fontSize: font20,
    padding: '0.5rem',
    '&:hover': {
      background: darkBlue,
      color: lightBlue
    },
    '&:last-child': {
      marginRight: 0
    }
  },
  btnIcon: {
    marginRight: '0.7rem'
  },
})

const Description = () => {

  const classes = cardStyles()
  return (
    <div className={classes.page}>
      <header>
        <Header />
      </header>
      <main className={classes.main}>
        <Navigation className={classes.navigation} link='/list' />
        <button className={classes.btn} onClick={() => window.open('')}>
          <SearchIcon className={classes.btnIcon} />
          Lien
        </button>
      </main>
    </div>
  )
}

export default Description
