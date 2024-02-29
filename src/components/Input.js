import React, { useState } from 'react';
import './Input.css';

const Input = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantData, setRestaurantData] = useState([]); // Assuming you have a state for your restaurant data

  // Sample restaurant data with ratings
  const sampleRestaurantData = [
    { name: 'Restaurant 1', rating: 4.5 },
    { name: 'Restaurant 2', rating: 3.8 },
    // Add more data as needed
  ];

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchClick = () => {
    console.log('Search Text:', searchText);
    // Add logic for searching based on searchText if needed
  };

  const handleTopRatedClick = () => {
    // Filter data for restaurants with a rating greater than 4
    const topRatedRestaurants = sampleRestaurantData.filter(restaurant => restaurant.rating > 4);
    console.log('Top Rated Restaurants:', topRatedRestaurants);
    // Set the filtered data to your state or use it as needed
    setRestaurantData(topRatedRestaurants);
  };

  return (  
    <div className='Input-container'>
      <div className='Input-content'>
        <input
          type="text"
          className='search-btn'
          placeholder="Enter Your Name"
          value={searchText}
          onChange={handleInputChange}
        />
        <button
          onClick={handleSearchClick}
        >
          Search
        </button>
        <div>
          <button
            className='filter-btn'
            onClick={handleTopRatedClick}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
