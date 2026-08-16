import React, { useEffect, useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  });

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function submitHandler(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:6001/plants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          image: formData.image,
          price: formData.price,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ERROR: ${response.status}`);
      }

      const newPlant = await response.json();

      onAddPlant(newPlant);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          onChange={changeHandler}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={changeHandler}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          onChange={changeHandler}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
