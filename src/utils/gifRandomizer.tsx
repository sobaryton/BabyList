import Animation from '../Components/Animation';

const gifs = ['baveux', 'cuillere', 'minion', 'tarzan'];

export const randomizeGif = () =>
  gifs
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => (
      <Animation
        key={value}
        gif={`/images/${value}.gif`}
        webm={`/images/${value}.webm`}
        webp={`/images/${value}.webp`}
        alt="GIF de remerciement"
      />
    ))[0];
