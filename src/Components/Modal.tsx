import classNames from 'classnames'
import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'
import { darkBlue, red, white } from './constants'
import CloseIcon from '@mui/icons-material/Close'

type ModalType = {
  open: boolean
  onClose: () => void
  children: ReactNode
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
    maxWidth: '65rem',
    minWidth: '250px',
    width: 'auto',
    height: 'auto',
    maxHeight: '86vh',
    overflow: 'scroll',
    background: white,
    padding: '3rem 1.5rem 1.5rem 1.5rem',
    boxShadow: '0px 0px 13px 0px rgba(0,0,0,0.75)',
    zIndex: 100,
    position: 'fixed',
    top: '6vh'
  },
  overflow: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.75)'
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    padding: '1rem 0 0 0'
  },
  closeBtn: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    width: '2.625rem',
    height: '2.625rem',
    background: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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

const Modal = ({ open, onClose, children }: ModalType) => {
  const classes = modalStyles()

  return (
    <div className={classNames(classes.modal, open ? classes.open : '')}>
      <div className={classes.overflow} onClick={onClose} />
      <div className={classes.modalContent}>
        <main className={classes.main}>
          {children}
        </main>
        <div className={classes.closeBtn}>
          <button onClick={onClose}>
            <CloseIcon sx={{ fontSize: '2rem' }} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
