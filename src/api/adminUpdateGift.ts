import axios from 'axios'
import { AddGiftType } from '../Pages/AdminAddGift'
import { GiftType } from '../reducers/selectedGift'

export const adminUpdateGift = (giftId: string, data: AddGiftType): Promise<GiftType> => axios.put(`https://wishlist-backend.nseverin.fr/my/wishlists/cf30c26b-f287-4541-9340-58cd672d72b2/gifts/${giftId}`, data, { headers: {"X-User": "solene"}})
    .then(response => response.data)
