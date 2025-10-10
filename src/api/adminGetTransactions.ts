import axios from 'axios';
import { Transaction } from '../reducers/selectedGift';

export const adminGetTransactions = async () => {
  const res = await axios.get<Transaction[]>(
    `${import.meta.env.VITE_BACKEND_BASE_URL}/my/wishlists/${import.meta.env.VITE_BABY_WISHLIST_ID}/transactions`,
    { headers: { 'X-User': 'solene' } }
  );

  return res.data;
};
