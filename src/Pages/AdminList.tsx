import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss'
import { adminDeleteGift } from '../api/adminDeleteGift';
import { adminListGifts } from '../api/adminListGifts';
import GiftCard from '../Components/Admin/GiftCard';
import { GiftType } from '../reducers/selectedGift';

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

const AdminList = () => {
    const [gifts, setGifts] = useState([] as GiftType[]);
    const classes = useStyle()

    useEffect(() => {
        adminListGifts()
            .then(setGifts);
    }, []);

    const deleteGift = (giftId: string) => {
        adminDeleteGift(giftId)
            .then(() => setGifts(gifts.filter(gift => gift.id !== giftId)));
    };

    return (
        <article className={classes.list}>
            {gifts.map(gift => <GiftCard
                  key={gift.id}
                  gift={gift}
                  onDelete={() => deleteGift(gift.id)}
            />)}
        </article>
    );
};

export default AdminList;
