import { Routes, Route } from "react-router-dom";
import {HomePage,} from "../pages/Home/HomePage";
import { ProductsList } from "../pages/Products/components/ProductsList";
import { Login, Register } from "../pages/Products";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
