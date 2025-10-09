import axios from 'axios'
import {GiftType} from '../reducers/selectedGift'

export const getGift = async (giftId: string) => {
    const res = await axios.get<GiftType>(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/wishlists/${import.meta.env.VITE_BABY_WISHLIST_ID}/gifts/${giftId}`
    );

    return res.data;
};
