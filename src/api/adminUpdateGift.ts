import axios from 'axios';
import { AddGiftType } from '../Pages/Admin/AddGift';
import { GiftType } from '../reducers/selectedGift';

export const adminUpdateGift = async (giftId: string, data: AddGiftType, accessToken: string) => {
  const res = await axios.put<GiftType>(
    `${import.meta.env.VITE_BACKEND_BASE_URL}/my/wishlists/${import.meta.env.VITE_BABY_WISHLIST_ID}/gifts/${giftId}`,
    data,
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );

  return res.data;
};
