import axios from 'axios'
import { GiftType } from '../reducers/selectedGift'

export const getGifts = () => {
  return axios.get('https://baby-wishlist.herokuapp.com/wishlists/cf30c26b-f287-4541-9340-58cd672d72b2/gifts')
    .then((res) => res.data as GiftType[])
}
