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
import { ForgetPasswordProvider } from './context/Forget.context';
import ForgetProtectedRoute from './components/ForgetProtectedRoute/ForgetProtectedRoute';
// import ForgetProtectedRoute from '@/components/ForgetProtectedRoute/ForgetProtectedRoute';
const UserTypeProvider = lazy(() => import('@/context/UserType.context'));
const Layout = lazy(() => import('@/Layout/Layout'));

const ProtectedRoute = lazy(() =>
  import('@/components/ProtectedRoute/ProtectedRoute')
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
        <ProtectedRoute allowedRolls={['admin', 'pharmacy', 'inventory']}>
          <Layout />
        </ProtectedRoute>
      ),
      children: [{ path: 'home', element: <Home /> }],
    },
    {
      path: '/admin',
      element: (
        <ProtectedRoute allowedRolls={['admin']}>
          <Layout />
        </ProtectedRoute>
      ),
      children: [{ index: true, element: <Users /> }],
    },
    {
      path: '/pharmacy',
      element: (
        <ProtectedRoute allowedRolls={['pharmacy']}>
          <Layout />
        </ProtectedRoute>
      ),
      children: [{ index: true, element: <HomePharmacy /> }],
    },
    {
      path: '/inventory',
      element: (
        <ProtectedRoute allowedRolls={['inventory']}>
          <Layout />
        </ProtectedRoute>
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
        {
          path: '/updatedpassword',
          element: (
            <ForgetProtectedRoute>
              <UpdatedPassword />
            </ForgetProtectedRoute>
          ),
        },
        {
          path: '/verifysendcoding',
          element: (
            <ForgetProtectedRoute>
              <VerifySendCoding />
            </ForgetProtectedRoute>
          ),
        },
      ],
    },
  ]);
  //* react query - redux
  return (
    <>
      <UserTypeProvider>
        <ForgetPasswordProvider>
          <Provider store={store}>
            <ThemeModeProvider>
              <Suspense fallback={<SkeletonLoader />}>
                <RouterProvider router={router} />
              </Suspense>
            </ThemeModeProvider>
            <Toaster />
          </Provider>
        </ForgetPasswordProvider>
      </UserTypeProvider>
    </>
  );
}

export default App;
