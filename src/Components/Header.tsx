import * as React from 'react'
import { createUseStyles } from 'react-jss'
import { blue, cursive, font64, white } from './constants'

const headerStyles = createUseStyles({
  header: {
    width: '100%',
    height: '30vh',
    backgroundImage: `url('${process.env.PUBLIC_URL + '/images/plaid.jpg'}')`,
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleContainer: {
    background: white,
    borderRadius: '20%',
  },
  title: {
    padding: '0rem 3rem',
    fontFamily: cursive,
    color: blue,
    fontSize: font64
  }
})

const Header = () => {
  const classes = headerStyles()
  return (
    <>
      <div className={classes.header}>
        <div className={classes.titleContainer}>
          <h1 className={classes.title}>
            Hello Bubba!
          </h1>
        </div>
      </div>
    </>
  );
}

export default Header;
