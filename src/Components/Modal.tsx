import classNames from 'classnames'
import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { darkBlue, font20, lightBlue, red, white } from './constants'
import CloseIcon from '@mui/icons-material/Close'
import BuyForm from './BuyForm'
import ParticipationForm from './ParticipationForm'

type ModalType = {
  open: boolean
  onClose: () => void
}

const modalStyles = createUseStyles({
  modal: {
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    height: '100%',
    display: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0
  },
  open: {
    display: 'flex',
  },
  modalContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '65rem',
    height: 'auto',
    maxHeight: '86vh',
    overflow: 'scroll',
    background: white,
    padding: '3rem 1.5rem 1.5rem 1.5rem',
    boxShadow: '0px 0px 13px 0px rgba(0,0,0,0.75)',
    position: 'absolute',
    top: '6vh'
  },
  overflow: {
    width: '100%',
    height: '106%',
    background: 'rgba(0,0,0,0.75)'
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%'
  },
  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    '& button': {
      cursor: 'pointer',
      background: 'transparent',
      border: 'none',
      color: darkBlue,
      '&:hover': {
        color: red
      }
    }
  },
  btnWrap: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginBottom: '2rem'
  },
  btn: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '50%',
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
  activeBtn: {
    background: darkBlue,
    color: lightBlue
  },
})

const Modal = ({ open, onClose }: ModalType) => {
  const classes = modalStyles()

  const [type, setType] = useState('')

  return (
    <div className={classNames(classes.modal, open ? classes.open : '')}>
      <div className={classes.overflow} onClick={onClose} />
      <div className={classes.modalContent}>
        <main className={classes.main}>
          <div className={classes.btnWrap}>
            <button onClick={() => setType('buy')} className={classNames(classes.btn, type === 'buy' ? classes.activeBtn : '')}>Offir</button>
            <button onClick={() => setType('participate')} className={classNames(classes.btn, type === 'participate' ? classes.activeBtn : '')}>Participer</button>
          </div>
          {
            type === '' ? '' : type === 'buy'
              ? <BuyForm />
              : <ParticipationForm />
          }
        </main>
        <div className={classes.closeBtn}>
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
