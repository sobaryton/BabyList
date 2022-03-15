import React from "react"
import { createUseStyles } from 'react-jss'
import Card from './Components/Card'
import Header from './Components/Header'

const appStyles = createUseStyles({
})

const ListPage = () => {
  const classes = appStyles()
  return (
    <>
      <Header />
      <Card />
    </>
  );
}

export default ListPage;
