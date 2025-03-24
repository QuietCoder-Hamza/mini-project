import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel, MdDelete } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();
  
  // Fetch parking spots from localStorage (or API later)
  const [parkingSpots, setParkingSpots] = useState([]);

  useEffect(() => {
    const storedSpots = JSON.parse(localStorage.getItem('parkingSpots')) || [];
    setParkingSpots(storedSpots);
  }, []);

  // Delete function for "My Parking Spots"
  const deleteParkingSpot = (index) => {
    const updatedSpots = [...parkingSpots];
    updatedSpots.splice(index, 1);
    setParkingSpots(updatedSpots);
    localStorage.setItem('parkingSpots', JSON.stringify(updatedSpots));
  };

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link 
              to="/" 
              onClick={handleCloseSideBar} 
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware /> <span>Owner</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>

          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => {
                  const linkPath = `/${link.name.toLowerCase().replace(/\s+/g, '-').replace(/-+/g, '-')}`;
                  const displayName = link.name.replace(/-/g, ' ');

                  return (
                    <NavLink
                      to={linkPath}
                      key={link.name}
                      onClick={handleCloseSideBar}
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? currentColor : '',
                      })}
                      className={({ isActive }) => (isActive ? activeLink : normalLink)}
                    >
                      {link.icon}
                      <span className="capitalize">{displayName}</span>
                    </NavLink>
                  );
                })}
              </div>
            ))}

            {/* My Parking Spots Section */}
            {/* <div className="mt-6">
              <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">My Parking Spots</p>
              {parkingSpots.length === 0 ? (
                <p className="text-gray-500 text-sm ml-4">.</p>
              ) : (
                parkingSpots.map((spot, index) => (
                  <div key={index} className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg m-2">
                    <span className="text-gray-800 dark:text-white">{spot.name}</span>
                    <button 
                      className="text-red-500 hover:text-red-700"
                      onClick={() => deleteParkingSpot(index)}
                    >
                      <MdDelete />
                    </button>
                  </div>
                ))
              )}
            </div> */}

          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
