import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import AddIcon from '@mui/icons-material/Add';
import MessageIcon from '@mui/icons-material/Message';
import { font20, lightGreen, darkGreen, lightBlue, darkBlue } from '../../utils/constants';
import { adminDeleteGift } from '../../api/adminDeleteGift';
import { adminListGifts } from '../../api/adminListGifts';
import GiftCard from '../../Components/Admin/GiftCard';
import { GiftType } from '../../reducers/selectedGift';
import { withAuthenticationRequired } from '../../utils/authentication';
import { useAuth } from 'react-oidc-context';
import type { RevokeTokensTypes } from 'oidc-client-ts';

const useStyle = createUseStyles({
  list: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    marginTop: '1rem',
    flexWrap: 'wrap',
    maxWidth: '75rem',
    margin: 'auto',
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  btn: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    minHeight: '2rem',
    marginRight: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    transition: '500ms all ease',
    fontWeight: 600,
    fontSize: font20,
    padding: '0.5rem',
    '&:last-child': {
      marginRight: 0,
    },
  },
  btnIcon: {
    marginRight: '0.7rem',
  },
  greenBtn: {
    background: lightGreen,
    color: darkGreen,
    '&:hover': {
      background: darkGreen,
      color: lightGreen,
    },
  },
  blueBtn: {
    background: lightBlue,
    color: darkBlue,
    '&:hover': {
      background: darkBlue,
      color: lightBlue,
    },
  },
});

const AdminList = () => {
  const [gifts, setGifts] = useState([] as GiftType[]);
  const navigate = useNavigate();
  const auth = useAuth();
  const classes = useStyle();

  useEffect(() => {
    adminListGifts(auth.user!.access_token).then(setGifts);
  }, []);

  const deleteGift = (giftId: string) => {
    const gift = gifts.find(gift => gift.id === giftId);
    if (!window.confirm(`Are you sure you want to delete ${gift?.title}?`)) {
      return;
    }

    adminDeleteGift(giftId, auth.user!.access_token).then(() => setGifts(gifts.filter(gift => gift.id !== giftId)));
  };

  const logout = async () => {
    void auth.revokeTokens(); //TODO: The promise is not awaited because it currently gets a CORS error, which should be fixed after https://github.com/goauthentik/authentik/pull/17233 is merged.
    await auth.removeUser();

    await navigate('/');
  };

  return (
    <>
      <Link to="add" className={classes.link}>
        <button className={classNames(classes.btn, classes.greenBtn)}>
          <AddIcon className={classes.btnIcon} />
          Add Gift
        </button>
      </Link>
      <Link to="messages" className={classes.link}>
        <button className={classNames(classes.btn, classes.blueBtn)}>
          <MessageIcon className={classes.btnIcon} />
          View Messages
        </button>
      </Link>
      {/* TODO: Logout which calls OIDC package logout + ensure it also logs out in Authentik */}
      <button onClick={logout}>Logout</button>
      <article className={classes.list}>
        {gifts.map(gift => (
          <GiftCard key={gift.id} gift={gift} onDelete={() => deleteGift(gift.id)} />
        ))}
      </article>
    </>
  );
};

export default withAuthenticationRequired(AdminList);
