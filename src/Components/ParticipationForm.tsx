import React from 'react'
import { useAppSelector } from '../hooks'
import Form from './Form'

const ParticipationForm = () => {
  const remainingAmount = useAppSelector((state) => state.modal.data.remainingAmount)
  return (
    <>
      {remainingAmount
        ? <>
          <p>Cet article a déjà eu des contributeurs.</p>
          <p>Il ne reste que <b>{remainingAmount}€</b> à payer sur le prix de départ.</p>
        </>
        : <>
          <p>Si l'article vous plaît, mais que vous ne voulez pas contribuer à 100%, vous êtes au bon endroit !</p>
          <p><strong>Ou</strong> que vous ne voulez pas payer en livres, mais quand même offrir complétement le cadeau, vous êtes également au bon endroit !</p>

        </>
      }
      <p>Merci de nous contacter afin d'obtenir nos coordonnées bancaires pour faire votre don!</p>
      <Form submitText="PARTICIPER" />
    </>
  )
}

export default ParticipationForm
