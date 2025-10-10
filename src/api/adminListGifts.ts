import axios from 'axios';
import { GiftType } from '../reducers/selectedGift';

export const adminListGifts = async () => {
  const res = await axios.get<GiftType[]>(
    `${import.meta.env.VITE_BACKEND_BASE_URL}/my/wishlists/${import.meta.env.VITE_BABY_WISHLIST_ID}/gifts`,
    { headers: { 'X-User': 'solene' } }
  );

  return res.data;
};
