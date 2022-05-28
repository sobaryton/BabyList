import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'
import { adminGetTransactions } from '../api/adminGetTransactions'
import Header from '../Components/Headers/Header'
import Loading from '../Components/Loading'
import { Transaction } from '../reducers/selectedGift'
import { darkBlue, font14, font16, font20, lightBlue } from '../utils/constants'

const messagePageStyles = createUseStyles({
  transactions: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  transaction: {
    width: '90%',
    minWidth: '19.875rem',
    maxWidth: '32rem',
    margin: '1rem',
    boxShadow: '0px 0px 13px 0px rgba(0,0,0,0.15)',
    padding: '1rem',
    '& h3': {
      color: darkBlue
    }
  },
  email: {
    fontSize: font16,
    fontStyle: 'italic',
    marginBottom: '1rem'
  },
  message: {
    margin: '1.5rem 0',
    fontStyle: 'italic',
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '13rem',
    minHeight: '2rem',
    marginRight: '0.5rem',
    background: lightBlue,
    color: darkBlue,
    border: 'none',
    cursor: 'pointer',
    transition: '500ms all ease',
    fontWeight: 600,
    fontSize: font20,
    padding: '0.5rem',
    textDecoration: 'none',
    '&:hover': {
      background: darkBlue,
      color: lightBlue
    },
  },
  date: {
    fontSize: font14,
    fontStyle: 'italic',
    color: 'grey',
    marginBottom: '1rem'
  }
})

const faketransactions = [
  {
    id: 'id1',
    giftId: 'wdhf',
    type: "ORDER",
    name: 'Famille 1',
    email: 'ksdjhf@ldf.com',
    message: 'Wesh bisous ljf owi gw rgke rgkj ergk ekrj gekjr gekjr gek rgekrj gekrjg ekrbj gekrj gerkbjg erkbgerkbj ',
    amount: 20,
    currency: 'EUR',
    anonymous: false,
    createdAt: new Date(),
    giftVersion: '1'
  },
  {
    id: 'id2',
    giftId: 'wrdhf',
    type: "PARTICIPATE",
    name: 'Famille 2',
    email: 'ksdjffhf@ldf.com',
    message: 'Wesh bisous !!!!!!!!',
    amount: 30,
    currency: 'EUR',
    anonymous: true,
    createdAt: new Date(),
    giftVersion: '1'
  }
]

const AdminMessages = () => {
  const classes = messagePageStyles()
  // const [transactions, setTransactions] = useState([] as Transaction[])
  const [transactions, setTransactions] = useState(faketransactions as Transaction[])
  const fetchTransactions = async () => await adminGetTransactions()

  useEffect(() => {
    if (!transactions) {
      fetchTransactions()
        .then((transactions: Transaction[]) => setTransactions(transactions))
    }
  }, [transactions])

  const frenchTypes = {
    ORDER: 'À commander',
    PARTICIPATE: 'Participé'
  }

  return <>
    <Header text="Messages" />
    <main>
      <div className={classes.transactions}>
        {
          !transactions
            ? <Loading />
            : <>
              {transactions.map((transaction: Transaction) => {
                return (
                  <div key={transaction.id} className={classes.transaction}>
                    <h3>{transaction.name} - <span className={classes.email}>{transaction.email}</span></h3>
                    <p className={classes.date}>{(transaction.createdAt)?.toLocaleString()}</p>
                    <p>{frenchTypes[transaction.type]}  -  {transaction.amount}€</p>
                    <p className={classes.message}>{transaction.message}</p>
                    <Link to={`/description/${transaction.giftId}`} className={classes.btn}>Lien du cadeau</Link>
                  </div>
                )
              })}
            </>
        }
      </div>
    </main>
  </>
}

export default AdminMessages
