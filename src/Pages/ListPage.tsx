import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import SearchBar from '../Components/SearchBar'
import Card from '../Components/Card'
import Header from '../Components/Headers/Header'
import Navigation from '../Components/Navigation'
import { useAppDispatch, useAppSelector } from '../utils/hooks'
import Modal from '../Components/Modal'
import { toggleModal } from '../reducers/modal'
import FormContent from '../Components/FormContent'
import { setGiftList } from '../reducers/giftList'
import { getGifts } from '../api/getGifts'
import { GiftType, GiftStatus } from '../reducers/selectedGift'
import Loading from '../Components/Loading'

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
  const [loading, setLoading] = useState(false);
  const giftList = useAppSelector((state) => state.giftList.gifts)
  const showModal = useAppSelector((state) => state.modal.isOpen)

  useEffect(() => {
    if (giftList.length === 0) {
      setLoading(true)
      getGifts()
        .then((gifts) => {
          setLoading(false)
          dispatch(setGiftList(gifts))
        })
    }
  }, [dispatch, giftList.length])

  useEffect(() => {
    requestSearch(giftList, searched)
  }, [giftList, searched]) // eslint-disable-line react-hooks/exhaustive-deps

  const giftOrder = (gift: GiftType) => {
    if (gift.status === GiftStatus.PARTLY_FUNDED) {
      return 0
    } else if (gift.status === GiftStatus.TO_OFFER && !gift.alreadyBought) {
      return 1
    } else if (gift.status === GiftStatus.TO_OFFER) {
      return 2
    } else {
      return 3
    }
  }

  const requestSearch = (giftsToFilter: GiftType[], searchedVal: string) => {
    const filteredRows = searchedVal === ''
      ? giftsToFilter
      : giftsToFilter.filter((card) => card.title.toLowerCase().includes(searchedVal.toLowerCase()))
    const sortedRows = [...filteredRows].sort((a, b) => giftOrder(a) - giftOrder(b))
    setRows(sortedRows)
  }

  return (
    loading
      ? <Loading />
      : <div className={classes.page}>
      <header>
          <Header text="Hello Bubba !" />
      </header>
      <main className={classes.main}>
        <Navigation className={classes.navigation} />
        <SearchBar
          value={searched}
          placeholder="Rechercher"
          onChange={searchVal => setSearched(searchVal)}
          onCancelSearch={() => setSearched("")}
          className={classes.searchBar}
        />
        <article className={classes.list}>
          {
            rows.map((card) => {
              return (
                <Card
                  key={card.id}
                  card={card}
                  onToggleModal={() => dispatch(toggleModal({ amount: card.amount, status: card.status, remainingAmount: card.remainingAmount, alreadyBought: card.alreadyBought }))}
                />
              )
            })
          }
        </article>
      </main>
      {showModal && <Modal><FormContent /></Modal>}
    </div>
  )
}

export default ListPage
