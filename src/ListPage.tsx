import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import SearchBar from 'material-ui-search-bar'
import Card from './Components/Card'
import Header from './Components/Header'
import Navigation from './Components/Navigation'
import { useAppDispatch, useAppSelector } from './hooks'
import Modal from './Components/Modal'
import { toggleModal } from './reducers/modal'
import FormContent from './Components/FormContent'
import { setGiftList } from './reducers/giftList'
import { getGifts } from './api/getGifts'
import { GiftType } from './reducers/selectedGift'

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
    maxWidth: '25rem',
    width: '85%',
    margin: 'auto',
  },
})

const ListPage = () => {
  const dispatch = useAppDispatch()
  const classes = listPageStyles()
  const [searched, setSearched] = useState("")
  const giftList = useAppSelector((state) => state.giftList.gifts)
  const [rows, setRows] = useState(giftList)
  const showModal = useAppSelector((state) => state.modal.isOpen)

  const fetchGifts = async () => await getGifts()

  useEffect(() => {
    fetchGifts()
      .then((gifts) => {
        dispatch(setGiftList(gifts))
      })
  }, [dispatch])

  useEffect(() => {
    requestSearch(giftList, searched)
  }, [giftList])

  const requestSearch = (rows: GiftType[], searchedVal: string) => {
    if (searchedVal === '') {
      setRows(rows)
    } else {
      const filteredRows = rows.filter((card) => card.title.toLowerCase().includes(searchedVal.toLowerCase()))
      setRows(filteredRows)
    }
  }

  const cancelSearch = () => {
    setSearched("")
    requestSearch(rows, searched)
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
          onChange={(searchVal) => requestSearch(rows, searchVal)}
          onCancelSearch={() => cancelSearch()}
          className={classes.searchBar}
        />
        <article className={classes.list}>
          {
            rows.map((card) => {
              return (
                <Card
                  key={card.url}
                  id={card.id}
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  amount={card.amount}
                  currency={card.currency}
                  store={card.store}
                  wishlistId={card.wishlistId}
                  status={card.status}
                  createdAt={card.createdAt}
                  category={card.category}
                  url={card.url}
                  version={card.version}
                  onToggleModal={() => dispatch(toggleModal({ amount: card.amount, status: card.status, remainingAmount: card.remainingAmount }))}
                />
              )
            })
          }
        </article>
      </main>
      {showModal && <Modal><FormContent /></Modal>}
    </div>
  );
}

export default ListPage
