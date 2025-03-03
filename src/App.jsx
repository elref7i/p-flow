import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import ThemeModeProvider from './context/theme.context';
import ForgetPasswordProvider from './context/Forget.context';
import UserTypeProvider from './context/UserType.context';

import SkeletonLoader from './components/SkeletonLoader/SkeletonLoader';
import ForgetProtectedRoute from './components/ForgetProtectedRoute/ForgetProtectedRoute';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';
import GuestRoute from '@/components/GuestRoute/GuestRoute';
import AddDrugsFromExcel from './pages/Inventory/AddDrugsFromExcel/AddDrugsFromExcel';
import AddDrugs from './pages/Inventory/AddDrugs/AddDrugs';
import LandingPage from './pages/auth/Landing/Landing';
// import AddDrugs from './pages/Inventory/AddDrugs/AddDrugs';
const Layout = lazy(() => import('@/Layout/Layout'));
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
// const LandingPage = lazy(() => import('@/pages/auth/Landing/Landing'));
const Users = lazy(() => import('./pages/Admin/Users/Users'));
const HomePharmacy = lazy(() =>
  import('./pages/Pharmacy/HomePharmacy/HomePharmacy')
);
const DashboardAdmin = lazy(() =>
  import('./pages/Admin/DashboardAdmin/DashboardAdmin')
);
const DashboardInventory = lazy(() =>
  import('./pages/Inventory/DashboardInventory/DashboardInventory')
);

const AddUser = lazy(() => import('./pages/Admin/AddUser/AddUser'));
const Setting = lazy(() => import('./pages/Setting/Setting'));

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute allowedRolls={['admin', 'pharmacy', 'inventory']}>
          <Layout />
        </ProtectedRoute>
      ),
      children: [{ path: '/home', element: <Home /> }],
    },
    {
      path: '/',
      element: (
        <ProtectedRoute allowedRolls={['pharmacy', 'inventory']}>
          <Layout />
        </ProtectedRoute>
      ),
      children: [{ path: '/setting', element: <Setting /> }],
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
        { path: 'adddrugsfromexcel', element: <AddDrugsFromExcel /> },
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
