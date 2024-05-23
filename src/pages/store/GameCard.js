import React from "react";

function GameCard(props) {
  function createWa() {
    const wow = props;
    if (wow.hasDiscount) {
      return (
        <div className="gameCard">
          <img src={wow.image} alt="" />
          <span className="title">{wow.title}</span>
          <div className="price_discount">
            <span className="discount">-{wow.discount}%</span>
            <span className="price">${wow.price}</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="gameCard">
          <img src={wow.image} alt="" />
          <span className="title">{wow.title}</span>
          <div className="price_discount">
            <span className="price">${wow.price}</span>
          </div>
        </div>
      );
    }
  }

  return createWa();
}

export default GameCard;
