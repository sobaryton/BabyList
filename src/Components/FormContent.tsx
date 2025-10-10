import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import { darkBlue, font20, lightBlue } from '../utils/constants';
import ParticipateForm from './Participate/ParticipateForm';
import { useAppSelector } from '../utils/hooks';
import BuyForm from './Buy/BuyForm';
import { GiftStatus } from '../reducers/selectedGift';

const listPageStyles = createUseStyles({
  btnWrap: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginBottom: '2rem',
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
      color: lightBlue,
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  btnIcon: {
    marginRight: '0.7rem',
  },
  activeBtn: {
    background: darkBlue,
    color: lightBlue,
  },
});

const FormContent = () => {
  const classes = listPageStyles();
  const status = useAppSelector(state => state.modal.data.status);
  const alreadyBought = useAppSelector(state => state.modal.data.alreadyBought);
  const [type, setType] = useState<GiftStatus | undefined>();

  return (
    <>
      {status === GiftStatus.PARTLY_FUNDED || alreadyBought ? (
        <>
          <h1>Participer</h1>
          <ParticipateForm />
        </>
      ) : (
        <div className={classes.btnWrap}>
          <button
            onClick={() => setType(GiftStatus.TO_OFFER)}
            className={classNames(classes.btn, type === GiftStatus.TO_OFFER ? classes.activeBtn : '')}
          >
            Commander
          </button>
          <button
            onClick={() => setType(GiftStatus.PARTLY_FUNDED)}
            className={classNames(classes.btn, type === GiftStatus.PARTLY_FUNDED ? classes.activeBtn : '')}
          >
            Participer
          </button>
        </div>
      )}
      {type === undefined ? '' : type === GiftStatus.TO_OFFER ? <BuyForm /> : <ParticipateForm />}
    </>
  );
};

export default FormContent;
