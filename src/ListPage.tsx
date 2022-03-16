import React from 'react'
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
          <Card
            imageUrl='https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2'
            title='Article name'
            description='This is the description of the article'
            price='£5'
            provider='Amazon'
          />
        </article>
      </main>
    </>
  );
}

export default ListPage;
