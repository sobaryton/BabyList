import axios from 'axios';

export const adminDeleteGift = async (giftId: string) => {
  await axios.delete(
    `${import.meta.env.VITE_BACKEND_BASE_URL}/my/wishlists/${import.meta.env.VITE_BABY_WISHLIST_ID}/gifts/${giftId}`,
    { headers: { 'X-User': 'solene' } }
  );
};
