import React, { useReducer, useState } from 'react'
import { createUseStyles } from 'react-jss'
import SearchBar from 'material-ui-search-bar'
import Card from './Components/Card'
import Header from './Components/Header'
import Navigation from './Components/Navigation'
import Modal from './Components/Modal'
import FormContent from './Components/FormContent'
import { closeModalReducer } from './reducers/closeModal'
import { cards } from './fakeData'

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
    alignItems: 'flex-start',
    marginTop: '1rem',
    flexWrap: 'wrap',
    maxWidth: '75rem',
    margin: 'auto'
  },
  searchBar: {
    width: '25rem',
    margin: 'auto',
  },
})

const initialState = { openModal: false }

const ListPage = () => {
  const classes = listPageStyles()
  const [state, dispatch] = useReducer(closeModalReducer, initialState)
  const [searched, setSearched] = useState("")
  const [rows, setRows] = useState(cards)

  const requestSearch = (searchedVal: string) => {
    const filteredRows = cards.filter((card) => {
      return card.title.toLowerCase().includes(searchedVal.toLowerCase())
    })
    setRows(filteredRows)
  }

  const cancelSearch = () => {
    setSearched("")
    requestSearch(searched)
  }

  return (
    <div className={classes.page}>
      <header>
        <Header />
      </header>
      <main className={classes.main}>
        <Navigation className={classes.navigation} />
        <SearchBar
          value={searched}
          placeholder="Rechercher"
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
          className={classes.searchBar}
        />
        <article className={classes.list}>
          {
            rows.map((card) => {
              return (
                <Card
                  key={card.link}
                  id={card.id}
                  imageUrl={card.imageUrl}
                  title={card.title}
                  description={card.description}
                  price={card.price}
                  provider={card.provider}
                  label={card.label}
                  onToggleModal={() => dispatch({ type: 'toggleModal' })}
                />
              )
            })
          }
        </article>
      </main>
      <Modal
        open={state.openModal}
        onClose={() => dispatch({ type: 'toggleModal' })}
        children={<FormContent />}
      />
    </div>
  );
}

export default ListPage
