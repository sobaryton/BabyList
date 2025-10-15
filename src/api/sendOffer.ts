import axios from 'axios';
import { type Transaction, TransactionType } from '../reducers/selectedGift';

export type TransactionData = {
  giftId: string;
  name: string;
  email: string;
  message: string;
  amount: number;
  anonymous: boolean;
  giftVersion: number;
};

export const sendOffer = async ({ giftId, name, email, message, amount, anonymous, giftVersion }: TransactionData) => {
  const res = await axios.post<Transaction>(
    `${import.meta.env.VITE_BACKEND_BASE_URL}/wishlists/${import.meta.env.VITE_BABY_WISHLIST_ID}/gifts/${giftId}/transactions`,
    {
      type: TransactionType.ORDER,
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
