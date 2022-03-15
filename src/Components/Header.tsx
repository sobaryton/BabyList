import * as React from 'react';
import { createUseStyles } from 'react-jss'

const headerStyles = createUseStyles({
  header: {
    width: '100%',
    height: '30vh',
    backgroundImage: 'url("blue-watercolour.jpg")',
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
    padding: '1rem 5rem',
    fontFamily: '"Lobster Two", cursive',
    color: '#4F5165',
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
