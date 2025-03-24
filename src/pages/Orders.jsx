import React, { useState } from 'react';

const AddNewParkingSpot = () => {
  const [parkingData, setParkingData] = useState({
    name: '',
    location: '',
    price: '',
    vehicleType: '',
    image: null,  // New field for image upload
    parkingType: '', // New field for parking type
  });

  const handleChange = (e) => {
    setParkingData({ ...parkingData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setParkingData({ ...parkingData, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(parkingData);
    alert("Parking Spot Added!");
    // Here you would send the parkingData to your backend
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Add New Parking Spot</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        {/* Parking Spot Name */}
        <input
          type="text"
          name="name"
          placeholder="Parking Spot Name"
          value={parkingData.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        {/* Location */}
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={parkingData.location}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        {/* Price */}
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={parkingData.price}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        {/* Vehicle Type */}
        <select
          name="vehicleType"
          value={parkingData.vehicleType}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        >
          <option value="">Select Vehicle Type</option>
          <option value="Car">Car</option>
          <option value="Bike">Bike</option>
          <option value="Truck">Cycle</option>
        </select>

        {/* 🆕 Parking Type Dropdown */}
        <select
          name="parkingType"
          value={parkingData.parkingType}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        >
          <option value="">Select Parking Type</option>
          <option value="Open">Open</option>
          <option value="Covered">Covered</option>
          <option value="Handicap">Handicap</option>
          <option value="EV Charging">EV Charging</option>
        </select>

        <h3 className="text-lg font-semibold"> Upload Image of your Parking Space</h3>
        {/* 🆕 Upload Image */}
        <input
          type="file"
          accept="image/*"
          placeholder='Upload Image of your Parking Space'
          onChange={handleImageUpload}
          className="border p-2 rounded"
          required
        />
      
        {/* Submit Button */}
        <button type="submit" className="bg-blue-400 text-white p-2 rounded">
          Add Parking Spot
        </button>
      </form>
    </div>
  );
};

export default AddNewParkingSpot;
