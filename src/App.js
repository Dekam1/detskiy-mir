import React from "react";
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import getProducts from "./store/actionCreators/getProducts";
import getCart from "./store/actionCreators/fetchCart";
import updateCart from "./store/actionCreators/updateCart";

import Main from "./pages/Main";
import ProductDetails from "./pages/ProductDetails";
import Orders from "./pages/Orders";

function App() {
  const { page } = useSelector(state => state.dataPagination);
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(getProducts(page));
  }, [page, dispatch]);

  React.useEffect(() => {
    updateCart(cartItems);
  }, [cartItems, cartItems.length]);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
}

export default App;
