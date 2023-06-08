import React from "react";
import Button from "../../components/Button/Button";
import "./Home.css";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import AboveFooter from "../../components/AboveFooter/AboveFooter";
import zx9 from "./zx9.svg";
import { useContext } from "react";
import { AppContext } from "../../main";
const Home = () => {
  const { products } = useContext(AppContext);
  const product = products.map((product) => product);

  return (
    <div className="homeContainer">
      <div className="homeNavCont">
        <Navigation />
      </div>
      <div className="homeOrangeProduct">
        <img className="homeOrangeProductImg" src={zx9} />
        <div className="homeOrangeProductInfoContainer">
          <h1 className="homeOrangeProductHeader">{product[3].title}</h1>
          <p className="homeOrangeProductParagraph">{product[3].description}</p>
          <Link to={`/product/${product[3].id}`}>
            {" "}
            <Button
              background={"black"}
              color={"white"}
              title={"SEE PRODUCT"}
              width={160}
            />
          </Link>
        </div>
      </div>

      <AboveFooter />
    </div>
  );
};

export default Home;
