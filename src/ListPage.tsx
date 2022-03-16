import React from "react"
import { createUseStyles } from 'react-jss'
import Card from './Components/Card'
import Header from './Components/Header'
import Navigation from './Components/Navigation'

const listPageStyles = createUseStyles({
  main: {
    padding: '2rem'
  },
  list: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '1rem'
  }
})

const ListPage = () => {
  const classes = listPageStyles()
  return (
    <>
      <header>
        <Header />
      </header>
      <main className={classes.main}>
        <Navigation />
        <article className={classes.list}>
          <Card />
        </article>
      </main>
    </>
  );
}

export default ListPage;
