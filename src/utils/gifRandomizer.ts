const gifs = [
  '<div style={{width: "28.125rem", height: 0, paddingBottom: "86%", position: "relative"}}><iframe src="https://giphy.com/embed/qNbw4ilR1RLKo" width="100%" height="100%" style={{ position: "absolute" }} frameBorder="0" title="gif"></iframe></div>',
  '<div style={{width: "100%", height:0, paddingBottom: "100%", position: "relative"}}><iframe src="https://giphy.com/embed/lfCTKCg4sw8rm" width="100%" height="100%" style={{ position: "absolute" }} frameBorder="0" title="gif"></iframe></div>',
  '<div style={{width: "100%", height:0, paddingBottom: "56%", position: "relative"}}><iframe src="https://giphy.com/embed/J2WQhnfK2WuUE" width="100%" height="100%" style={{ position: "absolute" }} frameBorder="0" title="gif"></iframe></div>',
  '<div style={{width: "100%", height:0, paddingBottom: "52%", position: "relative"}}><iframe src="https://giphy.com/embed/pkqnVgAiYQx2w" width="100%" height="100%" style={{ position: "absolute" }} frameBorder="0" title="gif"></iframe></div>'
]

export const randomizeGif = () => gifs.map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)[0]
