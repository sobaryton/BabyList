import React from 'react'
import Form from './Form'

type Props = {
  onClose: () => void
}

const ParticipationForm = ({ onClose }: Props) => {

  return (
    <>
      <p>Si l'article vous plaît, mais que vous ne voulez pas payer en livres, ou s'il est trop cher, vous êtes au bon endroit !</p>
      <p>Voici nos coordonnées bancaires françaises :</p>
      <p>METTRE COORDONNEES? OU DIRE ON VOUS RECONTACTE DANS LES PLUS BREFS DELAIS POUR VOUS COMMUNIQUER NOS COORDONEES BANCAIRES</p>
      <Form submitText="PARTICIPER" onClose={onClose} />
    </>
  )
}

export default ParticipationForm
