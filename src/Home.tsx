import React from "react"
import { createUseStyles } from 'react-jss'
import WarningIcon from '@mui/icons-material/Warning'
import BigHeader from './Components/BigHeader'
import Footer from './Components/Footer'
import StartInfo from './Components/StartInfo'

const homeStyles = createUseStyles({
  main: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    fontFamily: '"Roboto", sans-serif',
  },
  info: {
    width: '80%',
    margin: 'auto',
    display: 'flex',
    alignItems: 'flex-end',
  }
})

const Home = () => {
  const classes = homeStyles()
  return (
    <main className={classes.main}>
      <BigHeader />
      <div className={classes.info}>
        <WarningIcon sx={{ fontSize: 37, color: '#FF5A5F', marginRight: '1rem', marginBottom: '0.3rem' }} />
        <StartInfo />
      </div>
      <Footer />
    </main>
  );
}

export default Home;
