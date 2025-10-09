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
    maxWidth: '100%',
    maxHeight: '100%'
  }
})

const Loading = () => {
  const classes = footerStyles()
  return (
    <div className={classes.loadingImage}>
      <img className={classes.gif} src="/images/hands.gif" alt="gif for loading" />
    </div>
  )
}

export default Loading
