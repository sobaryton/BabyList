import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import WarningIcon from '@mui/icons-material/Warning'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import { lightBlue, darkBlue, font20, darkYellow, lightYellow, red, white, green, orange, font48 } from '../utils/constants'
import Navigation from '../Components/Navigation'
import Header from '../Components/Headers/Header'
import { useAppDispatch, useAppSelector } from '../utils/hooks'
import Modal from '../Components/Modal'
import FormContent from '../Components/FormContent'
import { toggleModal } from '../reducers/modal'
import { getGift } from '../api/getGift'
import { GiftType, selectGift } from '../reducers/selectedGift'
import Loading from '../Components/Loading'

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
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    flexWrap: 'wrap',
    '& p': {
      margin: '0.5rem 0'
    },
    '@media (min-width: 1024px)': {
      flexDirection: 'row',
      alignContent: 'flex-start',
      justifyContent: 'flex-start',
    }
  },
  image: {
    width: '100%',
    minWidth: '15rem',
    maxWidth: '40rem',
    height: '25rem',
    backgroundSize: 'cover',
    marginRight: 0,
    backgroundOrigin: 'border-box',
    backgroundPosition: 'center',
    '@media (min-width: 1024px)': {
      width: '40%',
      marginRight: '1rem',
    }
  },
  articleText: {
    width: '100%',
    '@media (min-width: 1024px)': {
      width: 'calc(60% - 1rem)',
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
  labels: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  categorylabel: {
    background: lightBlue,
    color: darkBlue,
    '& p': {
      color: darkBlue,
    }
  },
  label: {
    width: '10rem',
    height: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1rem 1rem 1rem 0',
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
  headerImage: {
    opacity: 0.75
  }
})

const Description = () => {
  const classes = cardStyles()
  const dispatch = useAppDispatch()
  const showModal = useAppSelector((state) => state.modal.isOpen)
  const { id } = useParams()
  const selectedGift = useAppSelector((state) => state.selectedGift.selectedGift)
  const {
    image,
    url,
    title,
    store, description,
    amount,
    status,
    currency,
    remainingAmount,
    category,
    transactions
  } = selectedGift || {} as GiftType

  const fetchSelectedGift = async () => await getGift(id ?? '')
  const nonAnonymousParticipants = transactions ? transactions.filter(transactions => !transactions.anonymous) : undefined

  useEffect(() => {
    if ((!selectedGift && !!id) || !transactions) {
      fetchSelectedGift()
        .then(gift => dispatch(selectGift(gift)))
    }
  }, [dispatch, id, selectedGift, transactions]) // eslint-disable-line react-hooks/exhaustive-deps

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

  const getParticipants = () => {
    if (!nonAnonymousParticipants) return ''
    const nonAnonymousParticipantNames = nonAnonymousParticipants.map(transaction => transaction.name)
    const uniqParticipants = Array.from(new Set(nonAnonymousParticipantNames))

    if (uniqParticipants.length === 1) return uniqParticipants.toString()
    if (uniqParticipants.length === 2) return uniqParticipants.join(' et ')

    const firstPartOfArray = uniqParticipants.slice(0, uniqParticipants.length - 2).join(', ')
    const secondPartArray = `${uniqParticipants[uniqParticipants.length - 2]} et ${uniqParticipants[uniqParticipants.length - 1]}`
    return `${firstPartOfArray}, ${secondPartArray}`
  }

  return selectedGift ? (
    <div className={classes.page}>
      <header>
        <Header background="/images/pieds-bebe.jpg" backgroundPosition="center" className={classes.headerImage} />
      </header>
      <main className={classes.main}>
        <Navigation className={classes.navigation} link='/list' />
        <div>
          <div className={classes.articleDetails}>
            <div className={classes.header}>
              <h1 className={classes.title}>{title}</h1>
              <div className={classes.labels}>
                <div className={classNames(classes.label, classes[labelClass()])}>
                  <p>{statusLabel[status]}</p>
                </div>
                <div className={classNames(classes.label, classes.categorylabel)}>
                  <p>{category}</p>
                </div>
              </div>
            </div>
            <div className={classes.article}>
              <div className={classes.image} style={{ backgroundImage: `url(${image})` }}></div>
              <div className={classes.articleText}>
                <p dangerouslySetInnerHTML={{ __html: replaceWithBr() }}></p>
                <p>Ce cadeau {frenchStatus[status]}.</p>
                <p>Son prix total est de <b>{currency === '£' ? `£${amount}` : `${amount}€`}</b>.</p>
                {
                  !!remainingAmount && remainingAmount !== amount && <div className={classes.textIcon}>
                    <WarningIcon sx={{ fontSize: font48, color: red, marginRight: '1rem', marginBottom: '0.3rem' }} />
                    <p>{nonAnonymousParticipants ? getParticipants() : 'Certaines personnes'} {nonAnonymousParticipants && nonAnonymousParticipants.length === 1 ? 'a' : 'ont'} déjà contribué à l'achat de ce cadeau. Si vous voulez également participer, il ne reste que <b>{remainingAmount}€</b> à payer sur le prix de départ.</p>
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
  ) : <Loading />
}

export default Description
