import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import WarningIcon from '@mui/icons-material/Warning'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import { lightBlue, darkBlue, font20, darkYellow, lightYellow, red, white, green, orange, font48 } from './constants'
import Navigation from './Navigation'
import Header from './Header'
import { useAppDispatch, useAppSelector } from '../hooks'
import Modal from './Modal'
import FormContent from './FormContent'
import { toggleModal } from '../reducers/modal'
import { getGift } from '../api/getGift'
import { GiftType, selectGift } from '../reducers/selectedGift'

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
    width: '9rem',
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
    minWidth: '25rem',
    maxWidth: '40rem',
    height: '25rem',
    backgroundSize: 'cover',
    marginRight: '1rem',
    backgroundOrigin: 'border-box',
    backgroundPosition: 'center',
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 0',
    marginTop: '3rem',
    maxWidth: '20rem'
  },
  article: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    '& p': {
      margin: '0.5rem 0'
    }
  },
  provider: {
    color: darkBlue,
    background: lightBlue,
    marginBottom: '1rem',
    fontWeight: 'bold',
    padding: '0.3rem 0.4rem',
    textDecoration: 'none'
  },
  header: {
    display: 'flex',
    width: '100%',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginBottom: '3rem'
  },
  title: {
    color: darkBlue
  },
  label: {
    width: '10rem',
    height: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& p': {
      fontWeight: 700,
      textTransform: 'uppercase',
      color: white
    }
  },
  redLabel: {
    background: red
  },
  greenLabel: {
    background: green
  },
  orangeLabel: {
    background: orange
  },
  textIcon: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  articleText: {
    width: '50%'
  }
})

const Description = () => {
  const classes = cardStyles()
  const dispatch = useAppDispatch()
  const showModal = useAppSelector((state) => state.modal.isOpen)
  const { id } = useParams()
  const selectedGift = useAppSelector((state) => state.selectedGift.selectedGift)
  const { image, url, title, store, description, amount, status, currency, remainingAmount } = selectedGift || {} as GiftType

  const fetchSelectedGift = async () => await getGift(id ?? '')

  useEffect(() => {
    if (!selectedGift && !!id) {
      fetchSelectedGift()
        .then(gift => dispatch(selectGift(gift)))
    }
  }, [dispatch, id, selectedGift]) // eslint-disable-line react-hooks/exhaustive-deps

  const replaceWithBr = () => description?.replace(/\n/g, "<br />")

  const frenchStatus = {
    OFFERED: 'a déjà été offert',
    TO_OFFER: 'est à offrir',
    RECEIVED: 'a été reçu',
    PARTLY_FUNDED: 'a besoin de participation'
  }

  const labelClass = () => {
    switch (status) {
      case 'OFFERED':
        return 'greenLabel'
      case 'TO_OFFER':
        return 'redLabel'
      case 'PARTLY_FUNDED':
        return 'orangeLabel'
      default:
        return 'orangeLabel'
    }
  }

  const statusLabel = {
    OFFERED: 'Offert',
    TO_OFFER: 'À offrir',
    PARTLY_FUNDED: 'À participer'
  }

  const openTransactionModal = () => {
    dispatch(toggleModal({ amount, status, remainingAmount }))
  }

  return selectedGift ? (
    <div className={classes.page}>
      <header>
        <Header text={title} background="/images/pieds-bebe.jpg" backgroundPosition="center" />
      </header>
      <main className={classes.main}>
        <Navigation className={classes.navigation} link='/list' />
        <div>
          <div className={classes.articleDetails}>
            <div className={classes.header}>
              <h1 className={classes.title}>{title}</h1>
              <div className={classNames(classes.label, classes[labelClass()])}>
                <p>{statusLabel[status]}</p>
              </div>
            </div>
            <div className={classes.article}>
              <div className={classes.image} style={{ backgroundImage: `url(${image})` }}></div>
              <div className={classes.articleText}>
                <p dangerouslySetInnerHTML={{ __html: replaceWithBr() }}></p>
                <p>Ce cadeau {frenchStatus[status]}.</p>
                <p>Son prix total est de <b>{currency === '£' ? `£${amount}` : `${amount}€`}</b>.</p>
                {
                  remainingAmount !== amount && <div className={classes.textIcon}>
                    <WarningIcon sx={{ fontSize: font48, color: red, marginRight: '1rem', marginBottom: '0.3rem' }} />
                    <p>Certaines personnes ont déjà contribué à l'achat de ce cadeau. Si vous voulez également participer, il ne reste que <b>{remainingAmount}€</b> à payer sur le prix de départ.</p>
                  </div>
                }
                <p>Trouvez cet article sur <a className={classes.provider} href={url} target='_blank' rel="noreferrer">{store}</a>.</p>
                <div className={classes.buttonWrap}>
                  <button className={classes.btn} onClick={() => window.open(url)}>
                    <OpenInNewIcon className={classes.btnIcon} />
                    Lien
                  </button>
                  {
                    status === "TO_OFFER" &&
                    <button className={classNames(classes.btn, classes.offrirBtn)} onClick={openTransactionModal}>
                      <CardGiftcardIcon className={classes.btnIcon} />
                      Offrir
                    </button>
                  }
                  {
                    status === "PARTLY_FUNDED" &&
                    <button className={classNames(classes.btn, classes.offrirBtn)} onClick={openTransactionModal}>
                      <CardGiftcardIcon className={classes.btnIcon} />
                      Participer
                    </button>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {showModal && <Modal><FormContent /></Modal>}
    </div>
  ) : <h1>Something went wrong!</h1>
}

export default Description
