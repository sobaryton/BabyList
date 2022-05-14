import React from 'react'
import { Route, Routes } from 'react-router'
import { createUseStyles } from 'react-jss'
import ListPage from './ListPage'
import Home from './Home'
import { sansSerif } from './Components/constants'
import Description from './Components/Description'

const appStyles = createUseStyles({
  "@global": {
    p: {
      padding: 0,
      margin: 0,
      fontFamily: sansSerif
    },
    h3: {
      padding: 0,
      margin: 0,
      fontFamily: sansSerif
    }
  }
})

const App = () => {
  appStyles()
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="list" element={<ListPage />} />
        <Route path="description/:id" element={<Description />} />
      </Routes>
    </>
  );
}

export default App;
