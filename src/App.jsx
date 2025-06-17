import { lazy, Suspense, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Auth
const Login = lazy(() => import("@/pages/auth/Login/Login"));
const Signup = lazy(() => import("@/pages/auth/Signup/Signup"));
const Home = lazy(() => import("@/pages/Home/Home"));
const UpdatedPassword = lazy(() =>
  import("@/pages/auth/UpdatedPassword/UpdatedPassword")
);
const ForgetPassword = lazy(() =>
  import("@/pages/auth/Forgetpassword/Forgetpassword")
);
const VerifySendCoding = lazy(() =>
  import("@/pages/auth/VerifySendCoding/VerifySendCoding")
);
const DashboardInventory = lazy(() =>
  import("./pages/Inventory/DashboardInventory/DashboardInventory")
);
import LandingPage from "@/pages/auth/Landing/Landing";

// Layout
const Layout = lazy(() => import("@/components/Layout/Layout"));
import ProtectedRoute from "@/components/Layout/ProtectedRoute/ProtectedRoute";
import GuestRoute from "@/components/Layout/GuestRoute/GuestRoute";
import ForgetProtectedRoute from "@/components/Layout/ForgetProtectedRoute/ForgetProtectedRoute";

// Import Admin
const UsersAction = lazy(() => import("@/pages/Admin/UsersAction/UsersAction"));
const DashboardAdmin = lazy(() =>
  import("@/pages/Admin/DashboardAdmin/DashboardAdmin")
);
const Users = lazy(() => import("@/pages/Admin/Users/Users"));

// Import Pharmacy
const Drugs = lazy(() => import("@/pages/Pharmacy/Drugs/Drugs"));
const DrugDetails = lazy(() =>
  import("@/pages/Pharmacy/DrugDetails/DrugDetails")
);
const HomePharmacy = lazy(() =>
  import("@/pages/Pharmacy/HomePharmacy/HomePharmacy")
);

// Inventory
import InventoryProfile from "@/pages/Inventory/InventoryProfile/InventoryProfile";
import AllDrugs from "@/pages/Inventory/AllDrugs/AllDrugs";
import DrugsAction from "@/pages/Inventory/DrugsAction/DrugsAction";
const OrdersInventory = lazy(() =>
  import("@/pages/Inventory/OrdersInventory/OrdersInventory")
);

// Shared Pages
import SkeletonLoader from "@/components/SkeletonLoader/SkeletonLoader";
const Setting = lazy(() => import("@/pages/Setting/Setting"));

//Provider
import ThemeModeProvider from "@/context/theme.context";
import ForgetPasswordProvider from "@/context/Forget.context";
import UserTypeProvider from "@/context/UserType.context";
import Cart from "./pages/Pharmacy/Cart/Cart";
import PaginationProvider from "./context/params.context";
import Whishlist from "./pages/Pharmacy/wishlist/whishlist";
import CategoriesAdmin from "./pages/Admin/categories_admin/categories_admin";
import PharmacyOrders from "./pages/Pharmacy/PharmacyOrders/PharmacyOrders";
import Inventories from "./pages/Pharmacy/Inventories/Inventories";
import ProfileBase from "./pages/Inventory/InventoryProfile/Profile";
import CategoryDrugs from "./pages/Pharmacy/CategoryDrugs/CategoryDrugs";
import {
  messaging,
  requestFCMToken,
} from "./components/notifications/firebase/firebase-config";
import { onMessage } from "firebase/messaging";

function App() {
  useEffect(() => {
    requestFCMToken();
    onMessage(messaging, (payload) => {
      console.log(payload);
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute allowedRolls={["admin", "pharmacy", "inventory"]}>
          <Layout />
        </ProtectedRoute>
      ),
      children: [{ path: "/home", element: <Home /> }],
    },
    {
      path: "/",
      element: (
        <ProtectedRoute allowedRolls={["pharmacy", "inventory"]}>
          <Layout />
        </ProtectedRoute>
      ),
      children: [{ path: "setting", element: <Setting /> }],
    },
    {
      path: "/admin",
      element: (
        <ProtectedRoute allowedRolls={["admin"]}>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <DashboardAdmin /> },
        { path: "users", element: <Users /> },
        { path: "usersaction", element: <UsersAction /> },
        { path: "categories_admin", element: <CategoriesAdmin /> },
      ],
    },
    {
      path: "pharmacy",
      element: (
        <ProtectedRoute allowedRolls={["pharmacy"]}>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <HomePharmacy /> },
        { path: "drugs", element: <Drugs /> },
        { path: "drugdetails/:id", element: <DrugDetails /> },
        { path: "categorydrugs/:id", element: <CategoryDrugs /> },
        { path: "cart", element: <Cart /> },
        { path: "inventories", element: <Inventories /> },
        { path: "orders", element: <PharmacyOrders /> },
        { path: "inventoryprofile/:id", element: <InventoryProfile /> },
        { path: "wishlist", element: <Whishlist /> },
      ],
    },
    {
      path: "/inventory",
      element: (
        <ProtectedRoute allowedRolls={["inventory"]}>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <DashboardInventory /> },
        { path: "AllDrugs", element: <AllDrugs /> },
        { path: "DrugsAction", element: <DrugsAction /> },
        { path: "myprofile", element: <ProfileBase /> },
        { path: "orders", element: <OrdersInventory /> },
      ],
    },

    {
      path: "/",
      element: (
        <GuestRoute>
          <Layout />
        </GuestRoute>
      ),
      children: [
        { path: "/landing", element: <LandingPage /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <Signup /> },
        { path: "/forgetpassword", element: <ForgetPassword /> },
        {
          path: "/updatedpassword",
          element: (
            <ForgetProtectedRoute>
              <UpdatedPassword />
            </ForgetProtectedRoute>
          ),
        },
        {
          path: "/verifysendcoding",
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
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserTypeProvider>
          <ForgetPasswordProvider>
            <PaginationProvider>
              <ThemeModeProvider>
                <Suspense fallback={<SkeletonLoader />}>
                  <RouterProvider router={router} />
                  <ReactQueryDevtools initialIsOpen={false} />
                </Suspense>
              </ThemeModeProvider>
            </PaginationProvider>
            <Toaster />
          </ForgetPasswordProvider>
        </UserTypeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
