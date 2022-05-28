import axios from 'axios'
import { Transaction } from '../reducers/selectedGift'

export const adminGetTransactions = () => {
  return axios.get(`https://baby-wishlist.herokuapp.com/wishlists/cf30c26b-f287-4541-9340-58cd672d72b2/gifts/transactions`)
    .then((res) => res.data as Transaction[])
}
