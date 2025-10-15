import axios from 'axios';
import type { Transaction } from '../reducers/selectedGift';

export const adminGetTransactions = async (accessToken: string) => {
  const res = await axios.get<Transaction[]>(
    `${import.meta.env.VITE_BACKEND_BASE_URL}/my/wishlists/${import.meta.env.VITE_BABY_WISHLIST_ID}/transactions`,
    { headers: { Authorization: `Bearer ${accessToken}` } },
  );

  return res.data;
};
