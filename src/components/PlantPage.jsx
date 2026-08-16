import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);

  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    async function fetchPlants() {
      try {
        const response = await fetch("http://localhost:6001/plants");

        if (!response.ok) throw new Error(`Error: ${response.status}`);

        const data = await response.json();

        setPlants(data);
      } catch (e) {
        console.error(e);
      }
    }
    fetchPlants();
  }, []);

  const handleAddPlant = (newPlant) => {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  };

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search setSearchItem={setSearchItem}/>
      <PlantList plants={plants} searchItem={searchItem} />
    </main>
  );
}

export default PlantPage;
