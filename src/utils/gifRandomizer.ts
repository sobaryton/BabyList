const gifs = [
  `<img src=${process.env.PUBLIC_URL + '/images/baveux.gif'} alt="gif for thanking" />`,
  `<img src=${process.env.PUBLIC_URL + '/images/cuillere.gif'} alt="gif for thanking" />`,
  `<img src=${process.env.PUBLIC_URL + '/images/minion.gif'} alt="gif for thanking" />`,
  `<img src=${process.env.PUBLIC_URL + '/images/tarzan.gif'} alt="gif for thanking" />`
]

export const randomizeGif = () => gifs.map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)[0]
