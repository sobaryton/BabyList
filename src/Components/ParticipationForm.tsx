import React from 'react'
import { createUseStyles } from 'react-jss'
import CelebrationIcon from '@mui/icons-material/Celebration'

const participationFormStyles = createUseStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1rem'
  },
})

const ParticipationForm = () => {
  const classes = participationFormStyles()
  return (
    <>
      <p>Si l'article vous plaît, mais que vous ne voulez pas payer en livres, ou s'il est trop cher, vous êtes au bon endroit !</p>
      <form className={classes.form}>
        <p>J'utilise cette monnaie :</p>
        <label>
          <input type='radio' required name='currency' />
          € (Euros)
        </label>
        <label>
          <input type='radio' required name='currency' />
          £ (Pounds)
        </label>
        <label>
          Je participe à la hauteur de
          <input type='number' required />
        </label>
        <p>Ce qui fait %</p>
        <p>Merci de remplir les informations suivantes, afin qu'on puisse vous faire un gros bisou ! &hearts; (et aussi vous recontacter)</p>
        <p>Voici nos coordonnées bancaires françaises :</p>
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
          <CelebrationIcon />
          PARTICIPER
        </button>
      </form>
    </>
  )
}

export default ParticipationForm
