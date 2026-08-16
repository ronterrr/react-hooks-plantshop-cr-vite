import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchItem }) {
  const filteredPlants = plants.filter((i) => {
    return(i.name && i.name.toLowerCase().includes(searchItem.toLowerCase()))
  });
  return (
    <ul className="cards">
      {filteredPlants.map((i) => {
        return (
          <PlantCard
            key={i.id}
            name={i.name}
            price={i.price}
            imglink={i.image}
          />
        );
      })}
    </ul>
  );
}

export default PlantList;
