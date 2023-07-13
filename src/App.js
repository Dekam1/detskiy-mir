import React from "react";
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import fetchCart from "./utils/fetchCart";
import updateCart from "./utils/updateCart";
import getProducts from "./utils/getProducts";

import Main from "./pages/Main";
import ProductDetails from "./pages/ProductDetails";
import Orders from "./pages/Orders";
import Snackbar from "./components/Snackbar/Snackbar";

function App() {
  const [pageNumber, setPageNumber] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProducts(pageNumber, setTotalPages));
  }, [pageNumber, dispatch]);

  React.useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  React.useEffect(() => {
    updateCart(cartItems);
  }, [cartItems, cartItems.length]);

  return (
    <>
      <Routes>
        <Route path="/detskiy-mir" element={
          <Main
            pageNumber={pageNumber}
            totalPages={totalPages}
            setPageNumber={setPageNumber}
          />}
        />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Snackbar />
    </>
  );
}

export default App;
