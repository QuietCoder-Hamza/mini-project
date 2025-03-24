import React, { useState, useEffect } from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { Button } from '../components';
import { earningData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: 'Time', value: 'Id' }}
      style={{ border: 'none', color: currentMode === 'Dark' && 'white' }}
      value="1"
      dataSource={earningData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);

const OwnerPanel = () => {
  const { currentColor } = useStateContext();

  // Load parking spots from local storage
  const [parkingSpots, setParkingSpots] = useState(() => {
    return JSON.parse(localStorage.getItem('parkingSpots')) || [];
  });

  // Function to delete a parking spot
  const handleDelete = (index) => {
    const updatedSpots = [...parkingSpots];
    updatedSpots.splice(index, 1);
    setParkingSpots(updatedSpots);
    localStorage.setItem('parkingSpots', JSON.stringify(updatedSpots));
  };

  return (
    <div className="mt-24">
      {/* Earnings & Stats Section */}
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">₹63,448.78</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full p-4"
            >
              <BsCurrencyDollar />
            </button>
          </div>
          <div className="mt-6">
            <Button color="white" bgColor={currentColor} text="Download" borderRadius="10px" />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl">
              <button type="button" style={{ color: item.iconColor, backgroundColor: item.iconBg }} className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl">
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>{item.percentage}</span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* My Parking Spots Section */}
      <div className="mt-6 p-6 bg-white dark:bg-secondary-dark-bg rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-3">My Parking Spots</h3>

        {parkingSpots.length === 0 ? (
          <p className="text-gray-500">No parking spots added yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {parkingSpots.map((spot, index) => (
              <div key={index} className="bg-gray-100 dark:bg-gray-800 p-4 shadow-md rounded-md">
                <img src={spot.image} alt="Parking Spot" className="w-full h-40 object-cover rounded-md mb-2" />
                <p><strong>Name:</strong> {spot.name}</p>
                <p><strong>Location:</strong> {spot.location}</p>
                <p><strong>Price:</strong> ₹{spot.price}</p>
                <p><strong>Vehicle Type:</strong> {spot.vehicleType}</p>
                <p><strong>Parking Type:</strong> {spot.parkingType}</p>
                <button onClick={() => handleDelete(index)} className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700">
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OwnerPanel;
