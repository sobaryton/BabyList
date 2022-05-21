import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import SearchBar from 'material-ui-search-bar'
import Card from '../Components/Card'
import Header from '../Components/Headers/Header'
import Navigation from '../Components/Navigation'
import { useAppDispatch, useAppSelector } from '../utils/hooks'
import Modal from '../Components/Modal'
import { toggleModal } from '../reducers/modal'
import FormContent from '../Components/FormContent'
import { setGiftList } from '../reducers/giftList'
import { getGifts } from '../api/getGifts'
import { GiftType } from '../reducers/selectedGift'

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
  const [rows, setRows] = useState([] as GiftType[])
  const giftList = useAppSelector((state) => state.giftList.gifts)
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
  }, [giftList]) // eslint-disable-line react-hooks/exhaustive-deps

  const requestSearch = (giftsToFilter: GiftType[], searchedVal: string) => {
    setSearched(searchedVal)
    if (searchedVal === '') {
      setRows(giftsToFilter)
    } else {
      const filteredRows = giftsToFilter.filter((card) => card.title.toLowerCase().includes(searchedVal.toLowerCase()))
      setRows(filteredRows)
    }
  }

  return (
    !rows.length
      ? <div style={{ width: "100%", height: 0, paddingBottom: "100%", position: "relative" }}><iframe src="https://giphy.com/embed/3o85xscgnCWS8Xxqik" width="100%" height="100%" style={{ position: 'absolute' }} frameBorder="0" title="loading gif"></iframe></div>
      : <div className={classes.page}>
      <header>
        <Header />
      </header>
      <main className={classes.main}>
        <Navigation className={classes.navigation} />
        <SearchBar
          value={searched}
          placeholder="Rechercher"
          onChange={(searchVal) => requestSearch(giftList, searchVal)}
          onCancelSearch={() => requestSearch(giftList, "")}
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
