import React from 'react'
import { useParams } from 'react-router-dom'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import { lightBlue, darkBlue, font20, darkYellow, lightYellow } from './constants'
import Navigation from './Navigation'
import Header from './Header'
import { cards } from '../fakeData'
import { CardType } from '../fakeData'
import { useAppDispatch, useAppSelector } from '../hooks'
import Modal from './Modal'

const cardStyles = createUseStyles({
  page: {
    position: 'relative'
  },
  main: {
    padding: '2rem 0.5rem'
  },
  navigation: {
    maxWidth: '25rem'
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
  image: {
    width: '40%',
    height: '25rem',
    backgroundSize: 'cover',
  },
  offrirBtn: {
    background: lightYellow,
    color: darkYellow,
    '&:hover': {
      background: darkYellow,
      color: lightYellow
    },
  },
  articleDetails: {
    display: 'flex'
  },
  buttonWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem',
    marginTop: '0.5rem'
  },
})

const Description = () => {
  const classes = cardStyles()
  const dispatch = useAppDispatch()
  const showModal = useAppSelector((state) => state.modal.isOpen)
  // get info from Api
  const id = useParams<{ id: string }>().id || ''
  const { image, url, title, store, description, amount, status, currency } = cards.filter((card: CardType) => card.id === id)[0]

  return (
    <div className={classes.page}>
      <header>
        <Header text={title} background="/images/blue-watercolour.jpg" />
      </header>
      <main className={classes.main}>
        <Navigation className={classes.navigation} link='/list' />
        <div>
          <div className={classes.articleDetails}>
            <div className={classes.image} style={{ backgroundImage: `url(${image})` }}></div>
            <div>
              <h3>{title}</h3>
              <p>{store}</p>
              <p>{description}</p>
              <p>{currency === '£' ? `${currency}${amount}` : `${amount}${currency}`}</p>
              <p>{status}</p>
            </div>
          </div>
          <div className={classes.buttonWrap}>
            <button className={classes.btn} onClick={() => window.open(url)}>
              <OpenInNewIcon className={classes.btnIcon} />
              Lien
            </button>
            <button className={classNames(classes.btn, classes.offrirBtn)} onClick={() => dispatch({ type: 'toggleModal' })}>
              <CardGiftcardIcon className={classes.btnIcon} />
              Offrir
            </button>
          </div>
        </div>
      </main>
      {showModal && <Modal />}
    </div>
  )
}

export default Description
