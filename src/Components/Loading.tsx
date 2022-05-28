import React from 'react'
import { createUseStyles } from 'react-jss'

const footerStyles = createUseStyles({
  loadingImage: {
    width: "100vw",
    height: "100vh",
    position: "relative",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  gif: {
    width: '50%',
    height: '100%'
  }
})

const Loading = () => {
  const classes = footerStyles()
  return <div className={classes.loadingImage}><img src={process.env.PUBLIC_URL + '/images/hands.gif'} alt="gif for loading" /></div>
}

export default Loading
