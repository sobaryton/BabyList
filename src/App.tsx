import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router';
import { createUseStyles } from 'react-jss';
import Home from './Pages/Home';
import { sansSerif } from './utils/constants';
import Loading from './Components/Loading';

const ListPage = lazy(() => import('./Pages/Wishlist').then(m => ({ default: m.ListPage })));
const Description = lazy(() => import('./Pages/Wishlist').then(m => ({ default: m.Description })));

const AdminAddGift = lazy(() => import('./Pages/Admin').then(m => ({ default: m.AdminAddGift })));
const AdminUpdateGift = lazy(() => import('./Pages/Admin').then(m => ({ default: m.AdminUpdateGift })));
const AdminList = lazy(() => import('./Pages/Admin').then(m => ({ default: m.AdminList })));
const AdminMessages = lazy(() => import('./Pages/Admin').then(m => ({ default: m.AdminMessages })));

const appStyles = createUseStyles({
  '@global': {
    p: {
      padding: 0,
      margin: 0,
      fontFamily: sansSerif,
    },
    h3: {
      padding: 0,
      margin: 0,
      fontFamily: sansSerif,
    },
  },
});

const App = () => {
  appStyles();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/description/:id" element={<Description />} />
          <Route path="/admin" element={<AdminList />} />
          <Route path="/admin/add" element={<AdminAddGift />} />
          <Route path="/admin/messages" element={<AdminMessages />} />
          <Route path="/admin/update/:id" element={<AdminUpdateGift />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
