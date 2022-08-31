import axios from 'axios'
import { Transaction } from '../reducers/selectedGift'

export const adminGetTransactions = () => {
  return axios.get(`https://wishlist-backend.nseverin.fr/my/wishlists/cf30c26b-f287-4541-9340-58cd672d72b2/transactions`, { headers: { "X-User": "solene" } })
    .then((res) => res.data as Transaction[])
}
