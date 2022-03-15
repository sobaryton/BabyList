import React from "react"
import { Route, Routes } from "react-router"
import ListPage from './ListPage'
import Home from './Home'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="list" element={<ListPage />} />
      </Routes>
    </>
  );
}

export default App;
