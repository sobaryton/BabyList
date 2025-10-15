import axios from 'axios';

export const adminDeleteGift = async (giftId: string, accessToken: string) => {
  await axios.delete(
    `${import.meta.env.VITE_BACKEND_BASE_URL}/my/wishlists/${import.meta.env.VITE_BABY_WISHLIST_ID}/gifts/${giftId}`,
    { headers: { Authorization: `Bearer ${accessToken}` } },
  );
};
