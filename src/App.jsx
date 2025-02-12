// import Signup from 'pages/Signup/Signup';
// import Login from 'pages/Login/Login';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store/sotre';
import { Toaster } from 'react-hot-toast';
import ThemeModeProvider from './context/theme.context';
import { lazy, Suspense } from 'react';
import SkeletonLoader from './components/SkeletonLoader/SkeletonLoader';

const UserTypeProvider = lazy(() => import('@/context/UserType.context'));
const Layout = lazy(() => import('@/Layout/Layout'));

const ProductRoute = lazy(() =>
  import('@/components/ProductRoute/ProductRoute')
);
const GuestRoute = lazy(() => import('@/components/GuestRoute/GuestRoute'));

const Login = lazy(() => import('@/pages/Login/Login'));
const Signup = lazy(() => import('@/pages/Signup/Signup'));
const Home = lazy(() => import('@/pages/Home/Home'));
const UpdatedPassword = lazy(() =>
  import('@/pages/UpdatedPassword/UpdatedPassword')
);
const ForgetPassword = lazy(() =>
  import('@/pages/Forgetpassword/Forgetpassword')
);
const VerifySendCoding = lazy(() =>
  import('@/pages/VerifySendCoding/VerifySendCoding')
);
const LandingPage = lazy(() => import('@/pages/Landing/Landing'));

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProductRoute>
          <Layout />
        </ProductRoute>
      ),
      children: [{ index: true, element: <Home /> }],
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
