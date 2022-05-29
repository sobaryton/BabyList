import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'
import { adminGetTransactions } from '../api/adminGetTransactions'
import Header from '../Components/Headers/Header'
import Loading from '../Components/Loading'
import { TransactionType, Transaction } from '../reducers/selectedGift'
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

const AdminMessages = () => {
  const classes = messagePageStyles()
  const [transactions, setTransactions] = useState([] as Transaction[])

  useEffect(() => {
      adminGetTransactions()
        .then((transactions: Transaction[]) => setTransactions(transactions))
  }, [])

  const getfFrenchTypes = (type: TransactionType) => {
    return type === TransactionType.ORDER ? 'À commander' : 'Participé'
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
                    <p>{getfFrenchTypes(transaction.type)}  -  {transaction.amount}€</p>
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
