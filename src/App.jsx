import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store/sotre';
import { Toaster } from 'react-hot-toast';
import ThemeModeProvider from './context/theme.context';
import SkeletonLoader from './components/SkeletonLoader/SkeletonLoader';
import Users from './pages/Admin/Users/Users';
import HomePharmacy from './pages/Pharmacy/HomePharmacy/HomePharmacy';
import HomeInventory from './pages/Inventory/HomeInventory/HomeInventory';

const UserTypeProvider = lazy(() => import('@/context/UserType.context'));
const Layout = lazy(() => import('@/Layout/Layout'));

const ProductRoute = lazy(() =>
  import('@/components/ProductRoute/ProductRoute')
);
const GuestRoute = lazy(() => import('@/components/GuestRoute/GuestRoute'));

const Login = lazy(() => import('@/pages/auth/Login/Login'));
const Signup = lazy(() => import('@/pages/auth/Signup/Signup'));
const Home = lazy(() => import('@/pages/Home/Home'));
const UpdatedPassword = lazy(() =>
  import('@/pages/auth/UpdatedPassword/UpdatedPassword')
);
const ForgetPassword = lazy(() =>
  import('@/pages/auth/Forgetpassword/Forgetpassword')
);
const VerifySendCoding = lazy(() =>
  import('@/pages/auth/VerifySendCoding/VerifySendCoding')
);
const LandingPage = lazy(() => import('@/pages/auth/Landing/Landing'));

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProductRoute allowedRolls={['admin', 'pharmacy', 'inventory']}>
          <Layout />
        </ProductRoute>
      ),
      children: [{ path: 'home', element: <Home /> }],
    },
    {
      path: '/admin',
      element: (
        <ProductRoute allowedRolls={['admin']}>
          <Layout />
        </ProductRoute>
      ),
      children: [{ index: true, element: <Users /> }],
    },
    {
      path: '/pharmacy',
      element: (
        <ProductRoute allowedRolls={['pharmacy']}>
          <Layout />
        </ProductRoute>
      ),
      children: [{ index: true, element: <HomePharmacy /> }],
    },
    {
      path: '/inventory',
      element: (
        <ProductRoute allowedRolls={['inventory']}>
          <Layout />
        </ProductRoute>
      ),
      children: [{ index: true, element: <HomeInventory /> }],
    },

    {
      path: '/',
      element: (
        <GuestRoute>
          <Layout />
        </GuestRoute>
      ),
      children: [
        { path: '/landing', element: <LandingPage /> },
        { path: '/login', element: <Login /> },
        { path: '/signup', element: <Signup /> },
        { path: '/forgetpassword', element: <ForgetPassword /> },
        { path: '/updatedpassword', element: <UpdatedPassword /> },
        { path: '/verifysendcoding', element: <VerifySendCoding /> },
      ],
    },
  ]);
  //* react query - redux
  return (
    <>
      <UserTypeProvider>
        <Provider store={store}>
          <ThemeModeProvider>
            <Suspense fallback={<SkeletonLoader />}>
              <RouterProvider router={router} />
            </Suspense>
          </ThemeModeProvider>
          <Toaster />
        </Provider>
      </UserTypeProvider>
    </>
  );
}

export default App;
