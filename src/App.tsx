import { lazy, Suspense } from 'react';
import { createUseStyles } from 'react-jss';
import { Route, Routes } from 'react-router';
import { Navigate } from 'react-router-dom';
import Loading from './Components/Loading';
import { sansSerif } from './utils/constants';

// Bundle code into 4 lazily-loaded artifacts: home, not found, lists + gifts, admin.
const Home = lazy(() => import('./Pages/Home').then(m => ({ default: m.default })));
const NotFound = lazy(() => import('./Pages/NotFound').then(m => ({ default: m.default })));

const Description = lazy(() => import('./Pages/Wishlist').then(m => ({ default: m.Description })));
const ListPage = lazy(() => import('./Pages/Wishlist').then(m => ({ default: m.ListPage })));

const AdminAddGift = lazy(() => import('./Pages/Admin').then(m => ({ default: m.AddGift })));
const AdminList = lazy(() => import('./Pages/Admin').then(m => ({ default: m.List })));
const AdminLogin = lazy(() => import('./Pages/Admin').then(m => ({ default: m.Login })));
const AdminMessages = lazy(() => import('./Pages/Admin').then(m => ({ default: m.Messages })));
const AdminUpdateGift = lazy(() => import('./Pages/Admin').then(m => ({ default: m.UpdateGift })));
const Authenticated = lazy(() => import('./Pages/Admin').then(m => ({ default: m.Authenticated })));
const AuthentikLogin = lazy(() => import('./Pages/Admin').then(m => ({ default: m.AuthentikLogin })));
const AuthentikLoginCallback = lazy(() => import('./Pages/Admin').then(m => ({ default: m.AuthentikLoginCallback })));
const Layout = lazy(() => import('./Pages/Admin').then(m => ({ default: m.Layout })));

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
          <Route index element={<ListPage />} />
          <Route path="description/:id" element={<Description />} />
        </Route>
        <Route path="admin" element={<Authenticated />}>
          <Route index element={<Navigate to="list" />} />
          <Route path="login">
            <Route index element={<AdminLogin />} />
            <Route path="authentik">
              <Route index element={<AuthentikLogin />} />
              <Route path="callback" element={<AuthentikLoginCallback />} />
            </Route>
          </Route>
          <Route path="list" element={<Layout />}>
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
