import React, { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

// 1. Pastikan semua Lazy Import mengarah ke file yang benar
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Services = React.lazy(() => import("./pages/Services"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Products = React.lazy(() => import("./pages/Products")); // Halaman Daftar Produk
const ProductDetail = React.lazy(() => import("./pages/ProductDetail")); // Halaman Detail Produk
const ErrorDisplay = React.lazy(() => import("./pages/ErrorDisplay"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Register = React.lazy(() => import("./pages/Auth/Register"));
const Forgot = React.lazy(() => import("./pages/Auth/Forget"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Main Dashboard Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/services" element={<Services />} />
          
          {/* RUTE PRODUK - Pastikan ini ada */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          
          <Route path="/error/:code" element={<ErrorDisplay />} />
          <Route path="*" element={<ErrorDisplay />} />
        </Route>
        
        {/* Authentication Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;