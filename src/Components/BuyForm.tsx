import React from 'react'
import { createUseStyles } from 'react-jss'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import BuyInformation from './BuyInformation'

const buyFormStyles = createUseStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1rem'
  },
  info: {
    marginTop: '2rem',
    marginBottom: '2rem'
  }
})

const BuyForm = () => {
  const classes = buyFormStyles()
  return (
    <div>
      <BuyInformation className={classes.info} />
      <form className={classes.form}>
        <p>Merci de remplir les informations suivantes, afin qu'on puisse vous faire un gros bisou! (et aussi vous recontacter)</p>
        <label>
          * Votre nom
          <input type='text' required placeholder='Votre nom' />
        </label>
        <label>
          <input type='checkbox' required />
          * Rester anonyme sur le site
        </label>
        <label>
          * Votre email
          <input type='email' required />
        </label>
        <label>
          Un message
          <input type='textarea' />
        </label>
        <button type='submit'>
          <CardGiftcardIcon />
          OFFRIR
        </button>
      </form>
    </div>
  )
}

export default BuyForm
