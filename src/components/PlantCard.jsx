import React, { useState } from "react";

function PlantCard({ name, price, imglink }) {
  const [inStock, setInStock] = useState(true);
  return (
    <li className="card" data-testid="plant-item">
      <img src={imglink} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button
          className="primary"
          onClick={() => {
            setInStock(!inStock);
          }}
        >
          In Stock
        </button>
      ) : (
        <button
          onClick={() => {
            setInStock(!inStock);
          }}
        >
          Out of Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;
