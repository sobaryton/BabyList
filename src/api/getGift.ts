import axios from 'axios'
import { GiftType } from '../reducers/selectedGift'

export const getGift = (giftId: string) => {
  return axios.get(`https://wishlist-backend.nseverin.fr/wishlists/cf30c26b-f287-4541-9340-58cd672d72b2/gifts/${giftId}`)
    .then((res) => res.data as GiftType)
}
