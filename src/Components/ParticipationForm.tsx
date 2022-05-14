import React from 'react'
import Form from './Form'

const ParticipationForm = () => {

  return (
    <>
      <p>Si l'article vous plaît, mais que vous ne voulez pas contribuer à 100%, vous êtes au bon endroit !</p>
      <p><strong>Ou</strong> que vous ne voulez pas payer en livres, mais quand même offrir complétement le cadeau, vous êtes également au bon endroit !</p>
      <p>Merci de nous contacter afin d'obtenir nos coordonnées bancaires pour faire votre don!</p>
      <Form submitText="PARTICIPER" />
    </>
  )
}

export default ParticipationForm
