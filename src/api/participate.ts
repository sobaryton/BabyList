import axios from 'axios';
import { TransactionType } from '../reducers/selectedGift';
import type { TransactionData } from './sendOffer';

export const participate = async ({
  giftId,
  name,
  email,
  message,
  amount,
  anonymous,
  giftVersion,
}: TransactionData) => {
  const res = await axios.post(
    `${import.meta.env.VITE_BACKEND_BASE_URL}/wishlists/${import.meta.env.VITE_BABY_WISHLIST_ID}/gifts/${giftId}/transactions`,
    {
      type: TransactionType.PARTICIPATE,
      name,
      email,
      message,
      amount,
      currency: 'EUR',
      anonymous,
      giftVersion,
    },
  );

  return res.data;
};
