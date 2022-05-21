import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'
import BuyModalContent from './Buy/BuyModalContent'
import { darkBlue, font20, lightBlue } from '../utils/constants'
import ParticipateForm from './Participate/ParticipateForm'
import { useAppSelector } from '../utils/hooks'

const listPageStyles = createUseStyles({
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

const FormContent = () => {
  const classes = listPageStyles()
  const status = useAppSelector((state) => state.modal.data.status)
  const [type, setType] = useState('')

  return (
    <>
      {
        status === 'PARTLY_FUNDED'
          ? <><h1>Participer</h1><ParticipateForm /></>
          : <div className={classes.btnWrap}>
            <button onClick={() => setType('TO_OFFER')} className={classNames(classes.btn, type === 'TO_OFFER' ? classes.activeBtn : '')}>Offir</button>
            <button onClick={() => setType('PARTLY_FUNDED')} className={classNames(classes.btn, type === 'PARTLY_FUNDED' ? classes.activeBtn : '')}>Participer</button>
      </div>
      }
      {
        type === '' ? '' : type === 'TO_OFFER'
          ? <BuyModalContent />
          : <ParticipateForm />
      }
    </>
  )
}

export default FormContent
