import axios from 'axios'

export const adminDeleteGift = (giftId: string): Promise<void> => axios.delete(`https://wishlist-backend.fly.dev/my/wishlists/cf30c26b-f287-4541-9340-58cd672d72b2/gifts/${giftId}`, { headers: {"X-User": "solene"}})
