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
    padding: '2rem 0.5rem'
  },
  navigation: {
    maxWidth: '25rem'
  },
  list: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '1rem',
    flexWrap: 'wrap',
    maxWidth: '75rem',
    margin: 'auto'
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

const cards = [
  {
    imageUrl: `${process.env.PUBLIC_URL + '/images/bebe.jpg'}`,
    title: 'Article name',
    description: 'This is the description of the article',
    price: '£5',
    provider: 'Amazon',
    label: 'offrir',
    link: 'https://www.cosatto.com/collections/bundles/products/giggle-quad-car-seat-and-i-size-base-bundle-charcoal-mister-fox'
  },
  {
    imageUrl: `${process.env.PUBLIC_URL + '/images/laine.jpg'}`,
    title: 'Article name 2',
    description: 'This is the description of the article',
    price: '£25',
    provider: 'Amazon',
    label: 'offert',
    link: 'https://www.cosatto.com/collections/bundles/products/giggle-quad-car-seat-and-i-size-base-bundle-charcoal-mister-fox'
  },
  {
    imageUrl: `${process.env.PUBLIC_URL + '/images/plaid.jpg'}`,
    title: 'Article name 3',
    description: 'This is the description of the article',
    price: '£125',
    provider: 'Amazon',
    label: 'recu',
    link: 'https://www.cosatto.com/collections/bundles/products/giggle-quad-car-seat-and-i-size-base-bundle-charcoal-mister-fox'
  },
  {
    imageUrl: `${process.env.PUBLIC_URL + '/images/laine.jpg'}`,
    title: 'Article name 23',
    description: 'This is the description of the article',
    price: '£25',
    provider: 'Amazon',
    label: 'offert',
    link: 'https://www.cosatto.com/collections/bundles/products/giggle-quad-car-seat-and-i-size-base-bundle-charcoal-mister-fox'
  },
  {
    imageUrl: `${process.env.PUBLIC_URL + '/images/plaid.jpg'}`,
    title: 'Article name 34',
    description: 'This is the description of the article',
    price: '£125',
    provider: 'Amazon',
    label: 'recu',
    link: 'https://www.cosatto.com/collections/bundles/products/giggle-quad-car-seat-and-i-size-base-bundle-charcoal-mister-fox'
  },
  {
    imageUrl: `${process.env.PUBLIC_URL + '/images/laine.jpg'}`,
    title: 'Article name 24',
    description: 'This is the description of the article',
    price: '£25',
    provider: 'Amazon',
    label: 'offert',
    link: 'https://www.cosatto.com/collections/bundles/products/giggle-quad-car-seat-and-i-size-base-bundle-charcoal-mister-fox'
  },
  {
    imageUrl: `${process.env.PUBLIC_URL + '/images/plaid.jpg'}`,
    title: 'Article name 35',
    description: 'This is the description of the article',
    price: '£125',
    provider: 'Amazon',
    label: 'recu',
    link: 'https://www.cosatto.com/collections/bundles/products/giggle-quad-car-seat-and-i-size-base-bundle-charcoal-mister-fox'
  }
]

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
          {
            cards.map((card) => {
              return (
                <Card
                  imageUrl={card.imageUrl}
                  title={card.title}
                  description={card.description}
                  price={card.price}
                  provider={card.provider}
                  label={card.label}
                  link={card.link}
                  onToggleModal={() => dispatch({ type: 'toggleModal' })}
                />
              )
            })
          }
        </article>
      </main>
      <Modal open={state.openModal} onClose={() => dispatch({ type: 'toggleModal' })} />
    </div>
  );
}

export default ListPage
