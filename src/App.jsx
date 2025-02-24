import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
// import { Provider } from 'react-redux';
// import { store } from './store/sotre';
import { Toaster } from 'react-hot-toast';
import ThemeModeProvider from './context/theme.context';
import SkeletonLoader from './components/SkeletonLoader/SkeletonLoader';
import Users from './pages/Admin/Users/Users';
import HomePharmacy from './pages/Pharmacy/HomePharmacy/HomePharmacy';
import { ForgetPasswordProvider } from './context/Forget.context';
import ForgetProtectedRoute from './components/ForgetProtectedRoute/ForgetProtectedRoute';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DashboardAdmin from './pages/Admin/DashboardAdmin/DashboardAdmin';
import DashboardInventory from './pages/Inventory/DashboardInventory/DashboardInventory';
import AddDrugs from './pages/Inventory/AddDrugs/AddDrugs';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AddUser from './pages/Admin/AddUser/AddUser';
import Setting from './pages/Setting/Setting';
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
      children: [
        { path: '/home', element: <Home /> },
        { path: '/setting', element: <Setting /> },
      ],
    },
    {
      path: '/admin',
      element: (
        <ProtectedRoute allowedRolls={['admin']}>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <DashboardAdmin /> },
        { path: 'users', element: <Users /> },
        { path: 'adduser', element: <AddUser /> },
      ],
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
      children: [
        { index: true, element: <DashboardInventory /> },
        { path: 'adddrugs', element: <AddDrugs /> },
      ],
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
  //* react query

  // const
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserTypeProvider>
          <ForgetPasswordProvider>
            <ThemeModeProvider>
              <Suspense fallback={<SkeletonLoader />}>
                <RouterProvider router={router} />
                <ReactQueryDevtools initialIsOpen={false} />
              </Suspense>
            </ThemeModeProvider>
            <Toaster />
          </ForgetPasswordProvider>
        </UserTypeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
