import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import ShowProducts from "./pages/ShowProduct/ShowProducts";

import AllProducts from "./components/AllProduct/AllProduct";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productspage" element={<ProductsPage />} />
        <Route path="/showproducts" element={<ShowProducts />} />
        <Route path="/allproducts/:category" element={<AllProducts />} />
        <Route path="/product/:productId" element={<ProductsPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
