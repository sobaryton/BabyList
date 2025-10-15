import { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useAuth } from 'react-oidc-context';
import { adminDeleteGift } from '../../api/adminDeleteGift';
import { adminListGifts } from '../../api/adminListGifts';
import GiftCard from '../../Components/Admin/GiftCard';
import type { GiftType } from '../../reducers/selectedGift';
import { withAuthenticationRequired } from '../../utils/authentication';

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
});

const List = () => {
  const [gifts, setGifts] = useState([] as GiftType[]);
  const auth = useAuth();
  const classes = useStyle();

  useEffect(() => {
    // biome-ignore lint/style/noNonNullAssertion: This is inside a protected route
    adminListGifts(auth.user!.access_token).then(setGifts);
  }, [auth.user]);

  const deleteGift = (giftId: string) => {
    const gift = gifts.find(gift => gift.id === giftId);
    if (!window.confirm(`Are you sure you want to delete ${gift?.title}?`)) {
      return;
    }

    // biome-ignore lint/style/noNonNullAssertion: This is inside a protected route
    adminDeleteGift(giftId, auth.user!.access_token).then(() => setGifts(gifts.filter(gift => gift.id !== giftId)));
  };

  return (
    <article className={classes.list}>
      {gifts.map(gift => (
        <GiftCard key={gift.id} gift={gift} onDelete={() => deleteGift(gift.id)} />
      ))}
    </article>
  );
};

export default withAuthenticationRequired(List);
