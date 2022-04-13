import React from 'react'
import Form from './Form'

const ParticipationForm = () => {
  return (
    <>
      <p>Si l'article vous plaît, mais que vous ne voulez pas payer en livres, ou s'il est trop cher, vous êtes au bon endroit !</p>
      <p>Voici nos coordonnées bancaires françaises :</p>
      <Form submitText="PARTICIPER" />
    </>
  )
}

export default ParticipationForm
