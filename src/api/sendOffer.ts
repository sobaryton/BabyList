import axios from 'axios'

export type Transaction = {
  giftId: string
  name: string
  email: string
  message: string
  amount: number
  anonymous: boolean
  giftVersion: number
}

export const sendOffer = ({ giftId, name, email, message, amount, anonymous, giftVersion }: Transaction) => {
  return axios.post(
    `https://baby-wishlist.herokuapp.com/wishlists/cf30c26b-f287-4541-9340-58cd672d72b2/gifts/${giftId}/transactions`,
    {
      type: "ORDER",
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
