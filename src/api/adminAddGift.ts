import axios from 'axios'
import { AddGiftType } from '../Pages/AdminAddGift'
import { GiftType } from '../reducers/selectedGift'

export const adminAddGift = (data: AddGiftType): Promise<GiftType> => axios.post(`https://wishlist-backend.fly.dev/my/wishlists/cf30c26b-f287-4541-9340-58cd672d72b2/gifts`, data, { headers: {"X-User": "solene"}})
    .then(response => response.data)
