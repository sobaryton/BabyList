import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'
import BuyForm from './BuyForm'
import { darkBlue, font20, lightBlue } from './constants'
import ParticipationForm from './ParticipationForm'

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

type Props = {
  onClose: () => void
}

const FormContent = ({ onClose }: Props) => {
  const classes = listPageStyles()
  const [type, setType] = useState('buy')

  return (
    <>
      <div className={classes.btnWrap}>
        <button onClick={() => setType('buy')} className={classNames(classes.btn, type === 'buy' ? classes.activeBtn : '')}>Offir</button>
        <button onClick={() => setType('participate')} className={classNames(classes.btn, type === 'participate' ? classes.activeBtn : '')}>Participer</button>
      </div>
      {
        type === '' ? '' : type === 'buy'
          ? <BuyForm onClose={onClose} />
          : <ParticipationForm onClose={onClose} />
      }
    </>
  );
}

export default FormContent
