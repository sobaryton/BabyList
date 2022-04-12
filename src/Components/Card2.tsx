import * as React from 'react'
import { createUseStyles } from 'react-jss'

type CardType = {
  imageUrl: string
  title: string
  description: string
  price: string
  provider: string
}

const cardStyles = createUseStyles({
  card: {
    maxWidth: '20rem',
    position: 'relative',
    boxShadow: '0px 0px 13px 0px rgba(0,0,0,0.75);',
  },
  image: {
    width: '100%',
    height: '16rem',
    backgroundSize: 'cover',
  },
  price: {
    position: 'absolute',
    top: 0,
    right: 3
  },
  desc: {
    padding: '0.4rem'
  },
  provider: {
    fontSize: ''
  }
})

const Card2 = ({ imageUrl, title, description, price, provider }: CardType) => {
  const classes = cardStyles()
  return (
    <div className={classes.card}>
      <div className={classes.image} style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <p className={classes.price}>{price}</p>
      <div className={classes.desc}>
        <h3>{title}</h3>
        <p className={classes.provider}>{provider}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card2
