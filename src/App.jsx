import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import ShowProducts from "./pages/ShowProduct/ShowProducts";
import { useState, createContext } from "react";

export const AppContext = createContext();

const products = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dffpo6zsc/image/upload/v1685205106/mark2/image-product_vagspd.jpg",
    title: "XX99 Mark II Headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    category: "Headphones",
    price: 2.999,
    imagesArray: [
      "https://res.cloudinary.com/dffpo6zsc/image/upload/v1685205106/mark2/image-gallery-3_xrxaqc.jpg",
      "https://res.cloudinary.com/dffpo6zsc/image/upload/v1685205106/mark2/image-gallery-2_rfncq4.jpg",
      "https://res.cloudinary.com/dffpo6zsc/image/upload/v1685205105/mark2/image-gallery-1_twqern.jpg",
    ],
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dffpo6zsc/image/upload/v1685205142/mark2/mark1/image-product_ahswrr.jpg",
    title: "XX99 Mark I Headphones",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    category: "Headphones",
    price: 1.75,
    imagesArray: [
      "https://res.cloudinary.com/dffpo6zsc/image/upload/v1685205142/mark2/mark1/image-gallery-3_hntz9u.jpg",
      "https://res.cloudinary.com/dffpo6zsc/image/upload/v1685205141/mark2/mark1/image-gallery-2_fmhv3k.jpg",
      "https://res.cloudinary.com/dffpo6zsc/image/upload/v1685205141/mark2/mark1/image-gallery-1_cnlmxf.jpg",
    ],
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dffpo6zsc/image/upload/v1685205182/mark2/mark1/xx59/image-product_zs9ceu.jpg",
    title: "XX59 Headphones",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    category: "Headphones",
    price: 899,
    imagesArray: [
      "https://res.cloudinary.com/dffpo6zsc/image/upload/v1685205182/mark2/mark1/xx59/image-gallery-3_vedcki.jpg",
      "https://res.cloudinary.com/dffpo6zsc/image/upload/v1685205182/mark2/mark1/xx59/image-gallery-1_uh9oyl.jpg",
      "https://res.cloudinary.com/dffpo6zsc/image/upload/v1685205182/mark2/mark1/xx59/image-gallery-2_yigndu.jpg",
    ],
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/dffpo6zsc/image/upload/v1685205254/mark2/mark1/xx59/zx9/image-product_dzfkzn.jpg",
    title: "ZX9 speaker",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    category: "Speakers",
    price: 4.5,
    imagesArray: [
      "https://res.cloudinary.com/dffpo6zsc/image/upload/v1685205253/mark2/mark1/xx59/zx9/image-gallery-2_gyrm5g.jpg",
      "https://res.cloudinary.com/dffpo6zsc/image/upload/v1685205253/mark2/mark1/xx59/zx9/image-gallery-3_shpuwn.jpg",
      "https://res.cloudinary.com/dffpo6zsc/image/upload/v1685205253/mark2/mark1/xx59/zx9/image-gallery-1_rl0l7l.jpg",
    ],
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/dffpo6zsc/image/upload/v1685205302/mark2/mark1/xx59/zx9/zx7/image-category-page-preview_ngdosg.jpg",
    title: "ZX7 SPEAKER",
    description:
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    category: "Speakers",
    price: 3.5,
    imagesArray: [
      "https://res.cloudinary.com/dffpo6zsc/image/upload/v1685205302/mark2/mark1/xx59/zx9/zx7/image-gallery-3_otiqra.jpg",
      "https://res.cloudinary.com/dffpo6zsc/image/upload/v1685205301/mark2/mark1/xx59/zx9/zx7/image-gallery-1_vrlozc.jpg",
      "https://res.cloudinary.com/dffpo6zsc/image/upload/v1685205301/mark2/mark1/xx59/zx9/zx7/image-gallery-2_kblejx.jpg",
    ],
  },
  {
    id: 6,
    img: "https://res.cloudinary.com/dffpo6zsc/image/upload/v1685205354/mark2/mark1/xx59/zx9/zx7/yx1/image-category-page-preview_htc23n.jpg",
    title: "YX1 WIRELESS EARPHONES",
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    category: "Earphones",
    price: 599,
    imagesArray: [
      "https://res.cloudinary.com/dffpo6zsc/image/upload/v1685205354/mark2/mark1/xx59/zx9/zx7/yx1/image-gallery-3_wxt3jv.jpg",
      "https://res.cloudinary.com/dffpo6zsc/image/upload/v1685205354/mark2/mark1/xx59/zx9/zx7/yx1/image-gallery-1_qnpfbk.jpg",
      "https://res.cloudinary.com/dffpo6zsc/image/upload/v1685205354/mark2/mark1/xx59/zx9/zx7/yx1/image-gallery-2_xquoyn.jpg",
    ],
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  return (
    <Router>
      <Header />
      <AppContext.Provider
        value={{ cartItems, setCartItems, quantity, setQuantity, products }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productspage" element={<ProductsPage />} />
          <Route path="/showproducts" element={<ShowProducts />} />
        </Routes>
        <Footer />
      </AppContext.Provider>
    </Router>
  );
}

export default App;
