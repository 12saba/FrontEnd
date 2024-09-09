import Home from "./pages/Home";
import ProductsPage from "./pages/Product";
import { Route, Routes } from "react-router-dom";
import NavBar from "./pages/component/NavBar";
import ProductDetails from "./pages/ProductDetails";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/login";
import UserAuth from "./pages/userAuth";
import Signup from "./pages/signup";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="product-details/:id?" element={<ProductDetails />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="UserAuth" element={<UserAuth />}>
          <Route index element={<h1>this is index routh</h1>} />
          <Route path="Login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
