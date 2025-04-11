/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import { UserTypeContext } from "./UserType.context";
import axios from "axios";
import toast from "react-hot-toast";
// import { CART_URL } from '../lib/api/api_url';

export const cartContext = createContext(null);

export default function CartProvider({ children }) {
  const { token } = useContext(UserTypeContext);
  const [cartInfo, setCartInfo] = useState(null);

  // * Add drug to cart
  async function addDrugToCart({ drugId, quantity }) {
    let toastId = toast.loading("Adding drug to cart...");
    try {
      const options = {
        url: "https://pflow-api-v3-1655e5b56c39.herokuapp.com/api/v1/cart",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          drugId,
          quantity,
        },
      };
      let { data } = await axios.request(options);
      console.log(data);
      if (data.status === "success") {
        toast.success(data.message);
        getLoggedUserCart();
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to add drug to cart!");
    } finally {
      toast.dismiss(toastId);
    }
  }

  // ^ Get Logged User Cart
  async function getLoggedUserCart() {
    try {
      const options = {
        url: "https://pflow-api-v3-1655e5b56c39.herokuapp.com/api/v1/cart",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      let { data } = await axios.request(options);
      console.log(data);
      setCartInfo(data);
    } catch (error) {
      console.log(error);
    }
  }

  // ! Remove Specific drug from cart
  async function removeDrugFromCart({ drugId }) {
    let toastId = toast.loading("Removing drug from cart...");
    try {
      const options = {
        url: `https://pflow-api-v3-1655e5b56c39.herokuapp.com/api/v1/cart/drug/${drugId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      let { data } = await axios.request(options);
      if (data.status === "success") {
        toast.success(data.message);
        setCartInfo(data);
        // setCartInfo({ ...data });
      }
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      toast.dismiss(toastId);
    }
  }

  // ~ clear Cart
  async function clearCart() {
    try {
      const options = {
        url: "https://pflow-api-v3-1655e5b56c39.herokuapp.com/api/v1/cart",
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      let { data } = await axios.request(options);
      console.log(data);
      if (data.status === "success") {
        toast.success(data.message);
        setCartInfo({
          numOfCartItems: 0,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  // ? update drug quantity in cart
  async function updateCartItemQuantity({ drugId, quantity }) {
    try {
      const options = {
        url: `https://pflow-api-v3-1655e5b56c39.herokuapp.com/api/v1/cart/drug/${drugId}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          quantity,
        },
      };
      let { data } = await axios.request(options);
      console.log(data);
      if (data.status === "success") {
        setCartInfo(data);
        // setCartInfo({ ...data });
      }
    } catch (error) {
      console.log(error);
    }
  }

  // ^ Remove Inventory From Cart
  async function removeInventoryFromCart({ inventoryId }) {
    try {
      const options = {
        url: `https://pflow-api-v3-1655e5b56c39.herokuapp.com/api/v1/cart/inventory/${inventoryId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      let { data } = await axios.request(options);
      console.log(data);
      if (data.status === "success") {
        toast.success(data.message);
        // getLoggedUserCart();
        // ! في حاجة ناقصة عشان المخزن يتشال من ال ui
        setCartInfo((prev) => ({
          ...prev,
          data: {
            ...prev.data,
            inventories: prev.data.inventories.filter(
              (inv) => inv.inventory._id !== inventoryId
            ),
          },
        }));
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <cartContext.Provider
      value={{
        addDrugToCart,
        getLoggedUserCart,
        cartInfo,
        removeDrugFromCart,
        clearCart,
        updateCartItemQuantity,
        removeInventoryFromCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
