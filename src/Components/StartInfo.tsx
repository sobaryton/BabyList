import React from "react"
import { createUseStyles } from 'react-jss'

const appStyles = createUseStyles({
  welcomeText: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    '& p': {
      margin: '0.3rem 0'
    }
  }
})

const StartInfo = () => {
  const classes = appStyles()
  return (
    <article className={classes.welcomeText}>
      <p>Hello!</p>
      <p>Comme vous le savez déjà, nous attendons un petit garçon (que l'on a surnommé jusqu'ici little bubba) pour mi-juillet.</p>
      <p>Et comme vous le savez également, nous résidons à Londres. Vous trouverez sur ce ce site des articles pour lesquels vous pourrez participer.</p>
      <p>Merci de ne pas nous envoyer de colis. Même si l'intention est très gentille, nous allons repayer les frais de douane, ce qui pourrait coûter très cher au final.</p>
    </article>
  );
}

export default StartInfo;
