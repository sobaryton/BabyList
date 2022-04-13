import React from 'react'
import { createUseStyles } from 'react-jss'
import Form from './Form'

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
      <p>Voici nos coordonnées bancaires françaises :</p>
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
      </form>
      <Form submitText="PARTICIPER" />
    </>
  )
}

export default ParticipationForm
