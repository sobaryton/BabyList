import classNames from 'classnames'
import React from 'react'
import { createUseStyles } from 'react-jss'
import { darkBlue, red, white } from './constants'
import CloseIcon from '@mui/icons-material/Close'

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
    width: '15rem',
    height: 'auto',
    background: white,
    padding: '1rem',
    boxShadow: '0px 0px 13px 0px rgba(0,0,0,0.75)',
    position: 'absolute'
  },
  overflow: {
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.2)'
  },
  main: {

  },
  closeBtn: {
    position: 'absolute',
    top: 3,
    right: 5,
    '& button': {
      cursor: 'pointer',
      background: 'transparent',
      border: 'none',
      color: darkBlue,
      '&:hover': {
        color: red
      }
    }
  }
})

const Modal = ({ open, onClose }: ModalType) => {
  const classes = modalStyles()
  return (
    <div className={classNames(classes.modal, open ? classes.open : '')}>
      <div className={classes.overflow} onClick={onClose} />
      <div className={classes.modalContent}>
        <header>
          Modal
        </header>
        <main className={classes.main}>
          content
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
