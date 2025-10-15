import axios from 'axios';
import type { GiftType } from '../reducers/selectedGift';

export const adminListGifts = async (accessToken: string) => {
  const res = await axios.get<GiftType[]>(
    `${import.meta.env.VITE_BACKEND_BASE_URL}/my/wishlists/${import.meta.env.VITE_BABY_WISHLIST_ID}/gifts`,
    { headers: { Authorization: `Bearer ${accessToken}` } },
  );

  return res.data;
};
