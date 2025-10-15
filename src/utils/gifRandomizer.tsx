const gifs = ['baveux.gif', 'cuillere.gif', 'minion.gif', 'tarzan.gif'];

export const randomizeGif = () =>
  gifs
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => <img key={value} src={`/images/${value}`} alt="gif for thanking" />)[0];
