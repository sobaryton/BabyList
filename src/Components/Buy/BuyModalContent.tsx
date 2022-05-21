import React from 'react'
import { createUseStyles } from 'react-jss'
import BuyInformation from './BuyInformation'
import BuyForm from './BuyForm'

const buyFormStyles = createUseStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1rem'
  },
  info: {
    marginBottom: '1rem'
  },
})

const BuyModalContent = () => {
  const classes = buyFormStyles()
  return (
    <>
      <BuyInformation className={classes.info} />
      <BuyForm />
    </>
  )
}

export default BuyModalContent
