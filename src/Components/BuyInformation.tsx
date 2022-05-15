import React from 'react'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'
import WarningIcon from '@mui/icons-material/Warning'
import CloseIcon from '@mui/icons-material/Close'
import CheckIcon from '@mui/icons-material/Check'
import { font24, green, red, white } from './constants'

const buyInfoStyles = createUseStyles({
  information: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  address: {
    margin: '0 auto',
  },
  redHighlight: {
    color: white,
    backgroundColor: red,
    padding: '0.2rem',
    fontWeight: 600
  },
  red: {
    color: red,
    fontWeight: 600
  },
  iconPara: {
    display: 'flex',
    paddingBottom: '0.7rem',
  }
})

const BuyInformation = ({ className }: { className?: string }) => {
  const classes = buyInfoStyles()
  return (
    <div className={classNames(classes.information, className)}>
      <div className={classes.iconPara}>
        <WarningIcon sx={{ fontSize: font24, color: red, marginRight: '1rem', marginBottom: '0.3rem' }} />
        <p>
          <span className={classes.redHighlight}>Attention</span> nous avons choisi la plupart des articles sur des <span className={classes.red}>sites en anglais</span> et où la <span className={classes.red}>monnaie est en Livres</span>, non pas en Euros.
        </p>
      </div>
      <p className={classes.iconPara}>
        <CloseIcon sx={{ fontSize: font24, color: red, marginRight: '0.5rem', marginLeft: '0.5rem' }} />
        Si cela ne vous arrange pas, mais que vous voulez tout de même gâter bébé, merci de choisir "Participer" en haut de la page et de faire un don. Comme cela vous pourrez faire un don à 100% en Euros, et nous nous occuperons de la livraison si nécessaire.
      </p>
      <p className={classes.iconPara}>
        <CheckIcon sx={{ fontSize: font24, color: green, marginRight: '0.5rem', marginLeft: '0.5rem' }} />
        Si vous voulez procéder avec l'achat direct, veuillez mettre l'adresse suivante sur le site pour la livraison :
      </p>
      <div className={classes.address}>
        <h3>Adresse de livraison</h3>
        <p>Mme Bary Solène & Mr Séverin Nicolas</p>
        <p>19 Percival Avenue</p>
        <p>Flat 1 Jaguar Court</p>
        <p>NW9 4BW LONDON</p>
        <p>UK</p>
      </div>
    </div>
  )
}

export default BuyInformation
