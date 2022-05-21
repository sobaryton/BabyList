import axios from 'axios'
import { AddGiftData } from '../Components/AdminAddGift'

export const adminAddGift = (data: AddGiftData) => axios.post(`https://baby-wishlist.herokuapp.com/my/wishlists/cf30c26b-f287-4541-9340-58cd672d72b2/gifts/`, data, { headers: {"X-User": "solene"}})
