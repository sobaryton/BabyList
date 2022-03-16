import * as React from 'react';
import { createUseStyles } from 'react-jss'

const headerStyles = createUseStyles({
  header: {
    width: '100%',
    height: '30vh',
    backgroundImage: 'url("laine.jpg")',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleContainer: {
    background: 'white',
    borderRadius: '20%',
  },
  title: {
    padding: '0rem 3rem',
    fontFamily: '"Lobster Two", cursive',
    color: '#0E2F43',
    fontSize: '4rem'
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
