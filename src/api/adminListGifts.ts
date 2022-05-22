import axios from 'axios'
import { GiftType } from '../reducers/selectedGift'

export const adminListGifts = (): Promise<GiftType[]> => axios.get(`https://baby-wishlist.herokuapp.com/my/wishlists/cf30c26b-f287-4541-9340-58cd672d72b2/gifts`, { headers: {"X-User": "solene"}})
    .then(response => response.data)
