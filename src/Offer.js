import React from "react";
import "./Offer.css";

const Offer = () => {
  return (
    <div className="container offer-align">
      <div className="row justify-content-center">
        <div className="col-12 col-md-5 d-flex flex-row justify-content-end offer-cont1-fruits-img">
          <div className="offer-cont-fruits ">
            <h3>
              <b>Summer offer !!</b>
            </h3>
            <p>100% Pure Natural Fruits</p>
            <button className="shopNow mb-0">Shop Now</button>
          </div>
        </div>
        <div className="col-12 col-md-5 d-flex flex-row justify-content-end offer-cont2-fruits-img">
          <div className="offer-cont-oceanfood">
            <h3 style={{color:"white",}}>
              <b>Fresh Meat & Sea foods</b>
            </h3>
            <p style={{color:"white",}}>With 25% off on All Meat</p>
            <button className="shopNow mb-0">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
