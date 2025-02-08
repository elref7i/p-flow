// import Signup from 'pages/Signup/Signup';
// import Login from 'pages/Login/Login';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/Layout/Layout';
import ProductRoute from '@/components/ProductRoute/ProductRoute';
import { RouterProvider } from 'react-router';
import Login from '@/pages/Login/Login';
import Signup from '@/pages/Signup/Signup';
import GuestRoute from '@/components/GuestRoute/GuestRoute';
import Home from '@/pages/Home/Home';
import UserTypeProvider from '@/context/UserType.context';
import UpdatedPassword from '@/pages/UpdatedPassword/UpdatedPassword';
import ForgetPassword from '@/pages/Forgetpassword/Forgetpassword';
import VerifySendCoding from '@/pages/VerifySendCoding/VerifySendCoding';
import { Provider } from 'react-redux';
import { store } from './store/sotre';
import { Toaster } from 'react-hot-toast';
import Landing from './pages/Landing/Landing';

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
        { path: '/landing', element: <Landing /> },
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
          <RouterProvider router={router} />
          <Toaster />
        </Provider>
      </UserTypeProvider>
    </>
  );
}

export default App;
