import axios from 'axios'
import { TransactionType } from '../reducers/selectedGift'
import { Transaction } from './sendOffer'

export const participate = ({ giftId, name, email, message, amount, anonymous, giftVersion }: Transaction) => {
  return axios.post(
    `https://baby-wishlist.herokuapp.com/wishlists/cf30c26b-f287-4541-9340-58cd672d72b2/gifts/${giftId}/transactions`,
    {
      type: TransactionType.PARTICIPATE,
      name,
      email,
      message,
      amount,
      currency: "EUR",
      anonymous,
      giftVersion
    }
  )
}
