export type CardType = {
  id: string
  wishlistId: string
  url: string
  image: string
  title: string
  description: string
  category: string
  amount: number
  currency: string
  store: string
  status: 'TO_OFFER' | 'OFFERED' | 'RECEIVED'
  createdAt: Date
  updatedAt?: Date
  deletedAt?: Date
}

export const cards: CardType[] = [
  {
    id: '06',
    wishlistId: 'wish1',
    title: 'Body',
    description: 'This is the description of the article',
    category: 'clothes',
    image: `${process.env.PUBLIC_URL + '/images/bebe.jpg'}`,
    store: 'Amazon',
    url: 'https://www.cosatto.com/collections/bundles/products/giggle-quad-car-seat-and-i-size-base-bundle-charcoal-mister-fox',
    amount: 5,
    currency: '€',
    status: 'TO_OFFER',
    createdAt: new Date('08/05/2022')
  },
  {
    id: '07',
    wishlistId: 'wish1',
    image: `${process.env.PUBLIC_URL + '/images/laine.jpg'}`,
    title: 'Pyjama',
    category: 'clothes',
    description: 'This is the description of the article.This is the description of the article. This is the description of the article',
    amount: 90,
    currency: '€',
    store: 'Amazon',
    status: 'OFFERED',
    url: 'https://www.laredoute.co.uk/ppdp/prod-350164157.aspx#shoppingtool=treestructureflyout',
    createdAt: new Date('08/05/2022')
  },
  {
    id: '08',
    wishlistId: 'wish1',
    image: `${process.env.PUBLIC_URL + '/images/blue-watercolour.jpg'}`,
    title: 'Jouet',
    category: 'toy',
    description: 'This is the description of the article',
    amount: 10.99,
    currency: '€',
    store: 'Amazon',
    status: 'RECEIVED',
    url: 'https://www.laredoute.co.uk/ppdp/prod-350185799.aspx#shoppingtool=treestructureflyout',
    createdAt: new Date('08/05/2022')
  },
  {
    id: '09',
    wishlistId: 'wish1',
    image: `${process.env.PUBLIC_URL + '/images/laine.jpg'}`,
    title: 'T-shirt',
    category: 'clothes',
    description: 'This is the description of the article',
    amount: 34.7,
    currency: '€',
    store: 'Amazon',
    status: 'OFFERED',
    url: 'https://www.laredoute.co.uk/ppdp/prod-350231322.aspx#shoppingtool=treestructureflyout',
    createdAt: new Date('08/05/2022')
  },
  {
    id: '10',
    wishlistId: 'wish1',
    image: `${process.env.PUBLIC_URL + '/images/plaid.jpg'}`,
    title: 'Article name 34',
    category: 'hygiene',
    description: 'This is the description of the article',
    amount: 65.77,
    currency: '£',
    store: 'Amazon',
    status: 'RECEIVED',
    url: 'https://www.laredoute.co.uk/ppdp/prod-350203317.aspx#shoppingtool=treestructureflyout',
    createdAt: new Date('08/05/2022')
  },
  {
    id: '11',
    wishlistId: 'wish1',
    image: `${process.env.PUBLIC_URL + '/images/laineBlanche.jpg'}`,
    title: 'Article name 24',
    category: 'eating',
    description: 'This is the description of the article',
    amount: 25,
    currency: '€',
    store: 'Amazon',
    status: 'OFFERED',
    url: 'https://www.laredoute.co.uk/ppdp/prod-350224712.aspx#shoppingtool=treestructureflyout',
    createdAt: new Date('08/05/2022')
  },
  {
    id: '12',
    wishlistId: 'wish1',
    image: `${process.env.PUBLIC_URL + '/images/watercolour.jpg'}`,
    title: 'Article name 35',
    category: 'bed',
    description: 'This is the description of the article',
    amount: 125,
    currency: '€',
    store: 'Amazon',
    status: 'RECEIVED',
    url: 'https://www.laredoute.co.uk/ppdp/prod-350224703.aspx#shoppingtool=treestructureflyout',
    createdAt: new Date('08/05/2022')
  }
]
