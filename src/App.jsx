import Home from "./pages/Home";
import ProductsPage from "./pages/Product";
import { Route, Routes } from "react-router-dom";
import NavBar from "./pages/component/NavBar";
import ProductDetails from "./pages/ProductDetails";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="product-details/:id?" element={<ProductDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
