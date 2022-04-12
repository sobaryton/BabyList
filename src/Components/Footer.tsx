import React from 'react'
import { createUseStyles } from 'react-jss'
import { font10 } from './constants'

const footerStyles = createUseStyles({
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  copyright: {
    fontSize: font10,
    fontStyle: 'italic',
  }
})

const Footer = () => {
  const classes = footerStyles()
  return (
    <footer className={classes.footer}>
      <p className={classes.copyright}>Made with &hearts; to welcome our little bubba</p>
      <p className={classes.copyright}>&copy; BARY Solene & SEVERIN Nicolas</p>
    </footer>
  );
}

export default Footer;
