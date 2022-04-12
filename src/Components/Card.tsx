import * as React from 'react'
import { createUseStyles } from 'react-jss'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import SearchIcon from '@mui/icons-material/Search'
import { darkBlue, darkYellow, font14, font16, font20, orange, lightBlue, lightYellow, white, green, red, blue } from './constants'
import classNames from 'classnames'

type CardType = {
  imageUrl: string
  title: string
  description: string
  price: string
  provider: string
  label: string
}

const cardStyles = createUseStyles({
  card: {
    maxWidth: '20rem',
    position: 'relative',
    boxShadow: '0px 0px 13px 0px rgba(0,0,0,0.75);'
  },
  image: {
    width: '100%',
    height: '16rem',
    backgroundSize: 'cover',
  },
  price: {
    position: 'absolute',
    top: 6,
    right: 6,
    background: white,
    padding: '0.3rem',
    borderRadius: '3px 4px 4px 3px',
    borderLeft: '1px solid white',
    marginLeft: 19,
    minWidth: '3rem',
    height: 39,
    display: 'flex',
    alignItems: 'center',
    '& p': {
      fontWeight: 700,
      fontSize: font16,
      color: darkBlue,
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      display: 'block',
      left: '-19px',
      top: 0,
      width: 0,
      height: 0,
      borderTop: '19px solid transparent',
      borderBottom: '20px solid transparent',
      borderRight: `19px solid ${white}`,
    },
    '&::after': {
      content: '""',
      backgroundColor: darkBlue,
      borderRadius: '50%',
      width: 6,
      height: 6,
      display: 'block',
      position: 'absolute',
      left: '-9px',
      top: 17,
    }
  },
  desc: {
    padding: '0.5rem',
  },
  provider: {
    fontSize: font14,
    fontStyle: 'italic',
    color: 'grey',
    marginBottom: '1rem'
  },
  buttonWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem',
    marginTop: '0.5rem'
  },
  btn: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '7.5rem',
    minHeight: '2rem',
    marginRight: '0.5rem',
    background: lightBlue,
    color: darkBlue,
    border: 'none',
    cursor: 'pointer',
    transition: '500ms all ease',
    fontWeight: 600,
    fontSize: font20,
    padding: '0.5rem',
    '&:hover': {
      background: darkBlue,
      color: lightBlue
    },
    '&:last-child': {
      marginRight: 0
    }
  },
  btnIcon: {
    marginRight: '0.7rem'
  },
  label: {
    width: '100%',
    height: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& p': {
      fontWeight: 700,
      textTransform: 'uppercase'
    }
  },
  blueLabel: {
    background: lightBlue,
    color: blue
  },
  redLabel: {
    background: red,
    color: white
  },
  greenLabel: {
    background: green,
    color: white
  },
  orangeLabel: {
    background: orange,
    color: white
  },
  offrirBtn: {
    background: lightYellow,
    color: darkYellow,
    '&:hover': {
      background: darkYellow,
      color: lightYellow
    },
  }
})

const Card = ({ imageUrl, title, description, price, provider, label }: CardType) => {

  const labelClass = () => {
    switch (label) {
      case 'offert':
        return 'blueLabel'
      case 'offrir':
        return 'redLabel'
      case 'recu':
        return 'greenLabel'
      default:
        return 'orangeLabel'
    }
  }

  const classes = cardStyles()
  return (
    <div className={classes.card}>
      <div className={classes.image} style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className={classes.price}><p>{price}</p></div>
      <div className={classNames(classes.label, classes[labelClass()])}>
        <p>{label}</p>
      </div>
      <div className={classes.desc}>
        <h3>{title}</h3>
        <p className={classes.provider}>{provider}</p>
        <p>{description}</p>
      </div>
      <div className={classes.buttonWrap}>
        <button className={classes.btn}>
          <SearchIcon className={classes.btnIcon} />
          Détails
        </button>
        <button className={classNames(classes.btn, classes.offrirBtn)}>
          <CardGiftcardIcon className={classes.btnIcon} />
          Offrir
        </button>
      </div>
    </div>
  )
}

export default Card
