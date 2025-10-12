import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router';
import { createUseStyles } from 'react-jss';
import { sansSerif } from './utils/constants';
import Loading from './Components/Loading';
import { Navigate } from 'react-router-dom';

// Bundle code into 4 lazily-loaded artifacts: home, not found, lists + gifts, admin.
const Home = lazy(() => import('./Pages/Home').then(m => ({ default: m.default })));
const NotFound = lazy(() => import('./Pages/NotFound').then(m => ({ default: m.default })));

const ListPage = lazy(() => import('./Pages/Wishlist').then(m => ({ default: m.ListPage })));
const Description = lazy(() => import('./Pages/Wishlist').then(m => ({ default: m.Description })));

const Authenticated = lazy(() => import('./Pages/Admin').then(m => ({ default: m.Authenticated })));
const AdminLogin = lazy(() => import('./Pages/Admin').then(m => ({ default: m.AdminLogin })));
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
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="list">
          <Route path="" element={<ListPage />} />
          <Route path="description/:id" element={<Description />} />
        </Route>
        <Route path="admin" element={<Authenticated />}>
          <Route index element={<Navigate to="list" />} />
          <Route path="login" element={<AdminLogin />} />
          <Route path="list">
            <Route index element={<AdminList />} />
            <Route path="add" element={<AdminAddGift />} />
            <Route path="messages" element={<AdminMessages />} />
            <Route path="update/:id" element={<AdminUpdateGift />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
