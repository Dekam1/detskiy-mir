import React from "react";
import { Routes, Route } from 'react-router-dom';

import Main from "./pages/Main";
import ProductDetails from "./pages/ProductDetails";
import Orders from "./pages/Orders";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
}

export default App;
