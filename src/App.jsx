import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import ShowProducts from "./pages/ShowProduct/ShowProducts";
import { useState, createContext } from "react";

import AllProducts from "./components/AllProduct/AllProduct";
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
    features:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
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
    features:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
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
    features:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
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
    features:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
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
    features:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
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
    features:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
  },
];
console.log(products.id);
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);

  return (
    <Router>
      <Header />
      <AppContext.Provider
        value={{
          cartItems,
          setCartItems,
          quantity,
          setQuantity,
          products,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productspage" element={<ProductsPage />} />
          <Route path="/showproducts" element={<ShowProducts />} />
          <Route path="/allproducts/:category" element={<AllProducts />} />
          <Route path="/product/:productId" element={<ProductsPage />} />
        </Routes>

        <Footer />
      </AppContext.Provider>
    </Router>
  );
}

export default App;
