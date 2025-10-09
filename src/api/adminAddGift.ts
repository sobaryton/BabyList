import axios from 'axios'
import {AddGiftType} from '../Pages/AdminAddGift'
import {GiftType} from '../reducers/selectedGift'

export const adminAddGift = async (data: AddGiftType) => {
    const res = await axios.post<GiftType>(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/my/wishlists/${import.meta.env.VITE_BABY_WISHLIST_ID}/gifts`,
        data,
        {headers: {"X-User": "solene"}}
    );

    return res.data;
};
