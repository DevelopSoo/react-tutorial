import { Route, Routes } from "react-router";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Layout from "./pages/Layout";
import { Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
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
