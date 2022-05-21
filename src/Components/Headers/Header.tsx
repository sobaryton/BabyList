import classNames from 'classnames'
import * as React from 'react'
import { createUseStyles } from 'react-jss'
import { darkBlue, cursive, font64, white, font48 } from '../../utils/constants'

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
  backgroundPosition?: string
  className?: string
}

const Header = ({ text, background, backgroundPosition, className }: HeaderType) => {
  const classes = headerStyles()
  return (
    <>
      <div className={classNames(classes.header, className)} style={{ backgroundImage: `url('${process.env.PUBLIC_URL}${background ? background : '/images/plaid.jpg'}')`, backgroundPosition }}>
        <div className={classes.titleContainer}>
          {text &&
            <h1 className={classes.title}>
              {text}
            </h1>
          }
        </div>
      </div>
    </>
  );
}

export default Header;
