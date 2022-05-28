import React from 'react'
import { Route, Routes } from 'react-router'
import { createUseStyles } from 'react-jss'
import ListPage from './Pages/ListPage'
import Home from './Pages/Home'
import { sansSerif } from './utils/constants'
import Description from './Pages/Description'
import AdminAddGift from './Pages/AdminAddGift'
import AdminUpdateGift from './Pages/AdminUpdateGift'
import AdminList from './Pages/AdminList'
import AdminMessages from './Pages/AdminMessages'

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
        <Route path="/admin" element={<AdminList />} />
        <Route path="/admin/add" element={<AdminAddGift />} />
        <Route path="/admin/messages" element={<AdminMessages />} />
        <Route path="/admin/update/:id" element={<AdminUpdateGift />} />
      </Routes>
    </>
  )
}

export default App
