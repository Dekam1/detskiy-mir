import React from "react";
import { Routes, Route } from 'react-router-dom';
import Main from "./pages/Main";
import Orders from "./pages/Orders";
import Basket from "./pages/Basket";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/basket" element={<Basket />} />
    </Routes>
  );
}

export default App;
