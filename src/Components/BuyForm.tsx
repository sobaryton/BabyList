import React from 'react'
import { createUseStyles } from 'react-jss'
import BuyInformation from './BuyInformation'
import Form from './Form'

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

const BuyForm = () => {
  const classes = buyFormStyles()
  return (
    <>
      <BuyInformation className={classes.info} />
      <Form submitText="OFFRIR" />
    </>
  )
}

export default BuyForm
