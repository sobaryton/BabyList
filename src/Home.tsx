import React from 'react'
import { createUseStyles } from 'react-jss'
import WarningIcon from '@mui/icons-material/Warning'
import BigHeader from './Components/BigHeader'
import Footer from './Components/Footer'
import { font48, red, sansSerif, white } from './Components/constants'

const homeStyles = createUseStyles({
  main: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    fontFamily: sansSerif,
  },
  info: {
    width: '80%',
    margin: 'auto',
    display: 'flex',
    alignItems: 'flex-end',
  },
  welcomeText: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    marginTop: '2rem',
    '& p': {
      margin: '0.3rem 0'
    },
    '@media (min-width: 1024px)': {
      marginTop: '0',
    },
  },
  red: {
    color: red
  },
  redHighlight: {
    color: white,
    backgroundColor: red,
    padding: '0.2rem',
    fontWeight: 600
  },
  warning: {
    display: 'flex',
    flexDrection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    '& p': {
      width: '90%'
    }
  }
})

const Home = () => {
  const classes = homeStyles()
  return (
    <main className={classes.main}>
      <BigHeader />
      <div className={classes.info}>
        <article className={classes.welcomeText}>
          <p>Welcome!!</p>
          <p>Comme vous le savez déjà, nous attendons un petit garçon (que l'on a surnommé jusqu'ici little bubba) pour mi-juillet.</p>
          <p>Et comme vous le savez également, nous résidons à Londres. Vous trouverez sur ce ce site des articles pour lesquels vous pourrez participer.</p>
          <div className={classes.warning}>
            <WarningIcon sx={{ fontSize: font48, color: red, marginRight: '1rem', marginBottom: '0.3rem' }} />
            <p className={classes.red}><span className={classes.redHighlight}>Merci de ne pas nous envoyer de colis.</span> Même si l'intention est très gentille, nous allons repayer les frais de douane, ce qui pourrait coûter très cher au final.</p>
          </div>
        </article>
      </div>
      <Footer />
    </main>
  );
}

export default Home;
