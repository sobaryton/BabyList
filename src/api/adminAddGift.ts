import axios from 'axios';
import type { AddGiftType } from '../Pages/Admin/AddGift';
import type { GiftType } from '../reducers/selectedGift';

export const adminAddGift = async (data: AddGiftType, accessToken: string) => {
  const res = await axios.post<GiftType>(
    `${import.meta.env.VITE_BACKEND_BASE_URL}/my/wishlists/${import.meta.env.VITE_BABY_WISHLIST_ID}/gifts`,
    data,
    { headers: { Authorization: `Bearer ${accessToken}` } },
  );

  return res.data;
};
