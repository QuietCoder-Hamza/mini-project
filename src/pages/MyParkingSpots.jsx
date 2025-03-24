// import React, { useState, useEffect } from 'react';

// const MyParkingSpots = () => {
//   // Sample state for demo, replace with actual data fetching
//   const [parkingSpots, setParkingSpots] = useState([
//     { id: 1, name: "Mall Parking", location: "City Center", price: "$5/hr" },
//     { id: 2, name: "Street Parking", location: "Downtown", price: "$3/hr" },
//   ]);

//   const handleDelete = (id) => {
//     // Remove parking spot
//     setParkingSpots(parkingSpots.filter(spot => spot.id !== id));
//   };

//   return (
//     <div className="p-5">
//       <h2 className="text-xl font-bold mb-4">My Parking Spots</h2>
//       {parkingSpots.length === 0 ? (
//         <p>No parking spots added yet.</p>
//       ) : (
//         <ul>
//           {parkingSpots.map((spot) => (
//             <li key={spot.id} className="mb-3 p-3 bg-gray-200 rounded flex justify-between">
//               <div>
//                 <p className="font-semibold">{spot.name}</p>
//                 <p>{spot.location} - {spot.price}</p>
//               </div>
//               <button 
//                 onClick={() => handleDelete(spot.id)} 
//                 className="bg-red-500 text-white px-3 py-1 rounded">
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default MyParkingSpots;
