import React, { useState } from "react";
import "./Product.css";
import chicken from "./images/chicken.png";
import banana from "./images/banana.png";
import guava from "./images/guava.png";
import melon from "./images/melon.png";
import tomato from "./images/tomato.png";
import fish from "./images/fish.png";
import almond from "./images/almond.png";
import mutton from "./images/mutton.png";

const Product = () => {
  const [products] = useState([
    {
      imageurl: chicken,
      name: "Chicken",
      price: "Rs.200",
    },
    {
      imageurl: banana,
      name: "Bannana",
      price: "Rs.120",
    },
    {
      imageurl: guava,
      name: "Guava",
      price: "Rs.50",
    },
    {
      imageurl:melon,
      name: "Watermelon",
      price: "Rs.100",
    },
    {
      imageurl:tomato,
      name: "Tomato",
      price: "Rs.50",
    },
    {
      imageurl:fish,
      name: "Fish",
      price: "Rs.220",
    },
    {
      imageurl:almond,
      name: "Almond",
      price: "Rs.300",
    },
    {
      imageurl:
        mutton,
      name: "Mutton",
      price: "Rs.800",
    },
  ]);

  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((product) => (
          <div className="col-12 col-md-6 col-lg-3">
            <div className="product-card">
              <img className="w-75" src={product.imageurl} alt={product.name} />
              <div className="product-description mt-2">
                <h4 className="mt-2">{product.name}</h4>
                <p className="mt-2">{product.price}</p>
                <button className="put-in-basket-btn mt-1">
                  Put in Basket
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
