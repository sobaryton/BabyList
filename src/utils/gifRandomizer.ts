const gifs = [
  `<img src="/images/baveux.gif" alt="gif for thanking" />`,
  `<img src="/images/cuillere.gif" alt="gif for thanking" />`,
  `<img src="/images/minion.gif" alt="gif for thanking" />`,
  `<img src="/images/tarzan.gif" alt="gif for thanking" />`
]

export const randomizeGif = () => gifs.map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)[0]
