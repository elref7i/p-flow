// import Signup from 'pages/Signup/Signup';
// import Login from 'pages/Login/Login';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import ProductRoute from '../src/components/ProductRoute/ProductRoute';
import { RouterProvider } from 'react-router';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import GuestRoute from '../src/components/GuestRoute/GuestRoute';
import Home from './pages/Home/Home';
import UserTypeProvider from './context/UserType.context';

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
        { path: '/login', element: <Login /> },
        { path: '/signup', element: <Signup /> },
      ],
    },
  ]);
  return (
    <>
      <UserTypeProvider>
        <RouterProvider router={router} />
      </UserTypeProvider>
    </>
  );
}

export default App;
