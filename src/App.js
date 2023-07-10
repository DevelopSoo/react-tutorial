import { Route, Routes } from "react-router";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Layout from "./pages/Layout";
import { Link } from "react-router-dom";
import { useState } from "react";
import { nanoid } from "nanoid";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [products, setProducts] = useState([
    {
      id: nanoid(),
      name: "멋진 바지",
      price: 20000,
      options: [28, 30, 32],
      likes: 100,
    },
    {
      id: nanoid(),
      name: "멋진 셔츠",
      price: 10000,
      options: ["small", "medium", "large"],
      likes: 200,
    },
    {
      id: nanoid(),
      name: "멋진 신발",
      price: 30000,
      options: [230, 240, 250, 260, 270],
      likes: 300,
    },
  ]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main products={products} />} />
        <Route path="/products" element={<Products products={products} />} />
        <Route path="/products/:id" element={<Product products={products} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route
        path="*"
        element={
          <>
            <div>없는 페이지입니다.</div>
            <Link to="/">홈으로 이동</Link>
          </>
        }
      />
    </Routes>
  );
}

export default App;
