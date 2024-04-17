import React from "react";
import "./Banner.css";
import vegetableimage from "./images/vegetablephotos.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  return (
    <main style={{ backgroundColor: "#F7F6BB" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 banner-right-cont d-flex flex-row justify-content-center">
            <div>
              <p className="fruit-fresh-style mb-0">FRESH FRUITS</p>
              <h1 className="vegetable-organic-style mt-3 mb-0">
                Vegetables 100% Organic
              </h1>
              <p className="mt-3 mb-0">Free Pickup and Delivery Available</p>
              <div className="mt-3 mb-0 d-flex flex-row ">
                <input
                  className="search-input-style w-70"
                  type="search"
                  placeholder="What do you need?"
                  aria-label="Search"
                />
                <button
                  className="search-btn-style d-none d-md-block"
                  type="submit"
                >
                  Search
                </button>
                <button className="search-btn-style d-md-none">
                  <FontAwesomeIcon
                    icon={faSearch}
                    style={{ color: "white" }}
                    size="lg"
                  />
                </button>
              </div>
              <button className="shopnow-style mt-4">Shop Now</button>
            </div>
          </div>
          <div className="col-12 col-lg-6 banner-left-cont d-flex flex-row justify-content-center">
            <div className="text-center">
              <img
                className="vegetable-img-style"
                src={vegetableimage}
                alt="group of vegetables"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
