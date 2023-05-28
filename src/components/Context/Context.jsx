import React from "react";
import { useState, createContext } from "react";
import App from "../../App";
export const Context = createContext();
const Context = () => {
  const products = [
    {
      id: 1,
      img: "https://res.cloudinary.com/dffpo6zsc/image/upload/v1685127288/image-category-page-preview_xn8lp1.jpg",
      title: "Mark 2",
      description:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      price: 2.999,
      features:
        "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
      category: "headphones",
    },

    {
      id: 2,
      img: "https://res.cloudinary.com/dffpo6zsc/image/upload/v1685127271/image-product_gih07s.jpg",
      title: "Mark 1",
      description:
        "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      price: 1.75,
      features:
        "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
      category: "headphones",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dffpo6zsc/image/upload/v1685127242/image-product_cak6aw.jpg",
      title: "ZX7",
      description:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      price: 2.999,
      features:
        "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
      category: "speakers",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/dffpo6zsc/image/upload/v1685127242/image-product_cak6aw.jpg",
      title: "ZX9",
      description:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      price: 2.999,
      features:
        "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
      category: "speakers",
    },
    {
      id: 5,
      img: "https://res.cloudinary.com/dffpo6zsc/image/upload/v1685127242/image-product_cak6aw.jpg",
      title: "YX1",
      description:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      price: 2.999,
      features:
        "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
      category: "earphones",
    },
  ];
  const [cardItems, setCardItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  return (
    <UserContext.Provider value={products}>
      <App />
    </UserContext.Provider>
  );
};

export default Context;
