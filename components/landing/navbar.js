"use client"

import React, { useState } from "react";
import { Search, ShoppingCart, User, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import logo from '@/assets/logo.png';

const cities = [
  "Nairobi",
  "Mombasa",
  "Kisumu",
  "Nakuru",
  "Eldoret",
  // ... add more cities
];

function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Nairobi");

  return (
    <div className="p-4 ">
    <header className="w-full bg-white rounded-lg ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center">
            <Image src={logo} alt="logo" width={160} height={160} />
          </div>

          <div className="flex items-center gap-2">
            {/* City Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)} 
                className="flex items-center text-sm text-gray-600"
              >
                <span className="mr-2">{selectedCity}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                  <ul>
                    {cities.map((city) => (
                      <li 
                        key={city} 
                        onClick={() => {setSelectedCity(city); setIsServicesOpen(false)}} 
                        className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                      >
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex items-center ml-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Medicine and healthcare items"
                  className="w-[300px] pl-8 pr-4 py-1.5 rounded-full border border-gray-300 focus:outline-none focus:border-indigo-500"
                />
                <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          {/* Healthcare Services Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsServicesOpen(!isServicesOpen)} 
              className="flex items-center text-gray-600 hover:text-gray-800"
            >
              Healthcare Services
              <ChevronDown className="w-4 h-4 ml-1" /> 
            </button>
            {/* Add your dropdown content here */}
            {isServicesOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                <ul>
                  <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                    Service 1
                  </li>
                  {/* Add more services as needed */}
                </ul>
              </div>
            )}
          </div>

          <button className="text-gray-600 hover:text-gray-800 flex items-center gap-1">
            <span className="bg-orange-100 text-orange-600 text-xs px-1.5 py-0.5 rounded">
              New
            </span>
            Offers
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
    </div>
  );
}

export default Navbar;
