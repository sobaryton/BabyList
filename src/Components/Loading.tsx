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
  return <div className={classes.loadingImage}><iframe src="https://giphy.com/embed/3o85xscgnCWS8Xxqik" className={classes.gif} frameBorder="0" title="loading gif"></iframe></div>
}

export default Loading
