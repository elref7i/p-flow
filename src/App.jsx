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
// import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';
// import GuestRoute from '@/components/GuestRoute/GuestRoute';
import LandingPage from './pages/auth/Landing/Landing';
import AllDrugs from './pages/Inventory/AllDrugs/AllDrugs';
import DrugsAction from './pages/Inventory/DrugsAction/DrugsAction';
import InventoryProfile from './pages/Inventory/InventoryProfile/InventoryProfile';
import ProtectedRoute from './components/Layout/ProtectedRoute/ProtectedRoute';
import GuestRoute from './components/Layout/GuestRoute/GuestRoute';

const Layout = lazy(() => import('@/Layout/Layout'));

//*Auth
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
const DashboardInventory = lazy(() =>
  import('./pages/Inventory/DashboardInventory/DashboardInventory')
);

//* import Admin
const UsersAction = lazy(() => import('./pages/Admin/UsersAction/UsersAction'));
const DashboardAdmin = lazy(() =>
  import('./pages/Admin/DashboardAdmin/DashboardAdmin')
);
const Users = lazy(() => import('./pages/Admin/Users/Users'));

//* import Pharmacy

const Drugs = lazy(() => import('./pages/Pharmacy/Drugs/Drugs'));
const DrugDetails = lazy(() =>
  import('./pages/Pharmacy/DrugDetails/DrugDetails')
);
const HomePharmacy = lazy(() =>
  import('./pages/Pharmacy/HomePharmacy/HomePharmacy')
);

//* Shared Pages
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
      children: [
        { path: 'setting', element: <Setting /> },
        { path: 'inventoryprofile', element: <InventoryProfile /> },
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
        { path: 'usersaction', element: <UsersAction /> },
      ],
    },
    {
      path: '/pharmacy',
      element: (
        <ProtectedRoute allowedRolls={['pharmacy']}>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <HomePharmacy /> },
        { path: 'drugs', element: <Drugs /> },
        { path: 'drugdetails/:id', element: <DrugDetails /> },
      ],
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
        { path: 'AllDrugs', element: <AllDrugs /> },
        { path: 'DrugsAction', element: <DrugsAction /> },
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
