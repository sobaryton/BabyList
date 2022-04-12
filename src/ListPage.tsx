import React, { useReducer } from 'react'
import { createUseStyles } from 'react-jss'
import Card from './Components/Card'
import Header from './Components/Header'
import Navigation from './Components/Navigation'
import Modal from './Components/Modal'

const listPageStyles = createUseStyles({
  page: {
    position: 'relative'
  },
  main: {
    padding: '2rem'
  },
  navigation: {
    maxWidth: '25rem'
  },
  list: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '1rem'
  }
})

const initialState = { openModal: false }

const reducer = (state: { openModal: any }, action: { type: any }) => {
  switch (action.type) {
    case 'toggleModal':
      return { openModal: !state.openModal }
    default:
      throw new Error();
  }
}

const ListPage = () => {
  const classes = listPageStyles()
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className={classes.page}>
      <header>
        <Header />
      </header>
      <main className={classes.main}>
        <Navigation className={classes.navigation} />
        <article className={classes.list}>
          <Card
            imageUrl={`${process.env.PUBLIC_URL + '/images/bebe.jpg'}`}
            title='Article name'
            description='This is the description of the article'
            price='£5'
            provider='Amazon'
            label='offert'
            link='https://www.cosatto.com/collections/bundles/products/giggle-quad-car-seat-and-i-size-base-bundle-charcoal-mister-fox'
            onToggleModal={() => dispatch({ type: 'toggleModal' })}
          />
        </article>
      </main>
      <Modal open={state.openModal} onClose={() => dispatch({ type: 'toggleModal' })} />
    </div>
  );
}

export default ListPage
