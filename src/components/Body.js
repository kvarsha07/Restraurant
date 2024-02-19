import React, { useState, useEffect} from 'react';
import RestaurantCard from './RestaurantCard';
import { Link } from "react-router-dom";

const Body = () => {
  const [filteredResObj, setFilteredResObj] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => { 
    try{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants,"full data" )
    setFilteredResObj(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    catch(error){
    console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="rest-container">
    {filteredResObj.map((resData, index) => (
      <RestaurantCard key={index} resData={resData} />
    ))}
  </div>
  );
};

export default Body;
