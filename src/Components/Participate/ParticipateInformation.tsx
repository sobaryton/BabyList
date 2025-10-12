import React from 'react';
import { useAppSelector } from '../../utils/state';

const ParticipateInformation = () => {
  const { remainingAmount, amount } = useAppSelector(state => state.modal.data);
  return (
    <>
      {!!remainingAmount && remainingAmount < amount ? (
        <>
          <p>Cet article a déjà eu des contributeurs.</p>
          <p>
            Il ne reste que <b>{remainingAmount}€</b> à payer sur le prix de départ.
          </p>
        </>
      ) : (
        <>
          <p>
            Le prix total est de <b>{amount}€</b>, vous êtes le premier contributeur.
          </p>
          <p>Si l'article vous plaît, mais que vous ne voulez pas contribuer à 100%, vous êtes au bon endroit !</p>
          <p>
            <strong>OU</strong> que vous ne voulez pas payer en Livres Sterling, mais quand même offrir complétement le
            cadeau, vous êtes également au bon endroit !
          </p>
        </>
      )}
      <p>
        Merci de nous contacter à l'adresse email suivante afin d'obtenir nos coordonnées bancaires pour faire votre don
        :{' '}
        <a target="_blank" href="mailto:team.nico.soso@gmail.com" rel="noreferrer">
          team.nico.soso@gmail.com
        </a>
        .
      </p>
    </>
  );
};

export default ParticipateInformation;
