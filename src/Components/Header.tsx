import * as React from 'react'
import { createUseStyles } from 'react-jss'
import { darkBlue, cursive, font64, white, font48 } from './constants'

const headerStyles = createUseStyles({
  header: {
    width: '100%',
    height: '30vh',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleContainer: {
    borderRadius: '20%',
  },
  title: {
    padding: '0rem 3rem',
    fontFamily: cursive,
    color: darkBlue,
    fontSize: font48,
    background: white,
    '@media (min-width: 1024px)': {
      fontSize: font64,
    }
  }
})

type HeaderType = {
  text?: string
  background?: string
}

const Header = ({ text, background }: HeaderType) => {
  const classes = headerStyles()
  return (
    <>
      <div className={classes.header} style={{ backgroundImage: `url('${process.env.PUBLIC_URL}${background ? background : '/images/plaid.jpg'}')` }}>
        <div className={classes.titleContainer}>
          <h1 className={classes.title}>
            {text ? text : 'Hello Bubba!'}
          </h1>
        </div>
      </div>
    </>
  );
}

export default Header;
