import React, { useState, useEffect} from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

// import { Link } fr om "react-router-dom";
  

const Body = () => {
  const [filteredResObj, setFilteredResObj] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => { 
    
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(data.json);
    setFilteredResObj(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
  
    // // conditional rendering (first type we use shimmer )
    // if(filteredResObj.length=== 0)
    // {
    //    return <Shimmer/>
    // }
 
    // this is another way or conditional rendering (Ternary operator )
  return filteredResObj.length=== 0 ? <Shimmer/> :(
    <>
      <div className="fi-lter flex">
          <div className="search m-4 p-4">
        <input
            type="text"
            className='search-btn'
            placeholder="Enter Your Name"
            value={searchText}
            onChange={(e)=>
              setSearchText(e.target.value)}
          />
        <button
            onClick={()=>{
              console.log(searchText);
              const filterdRestro=filteredResObj.filter((res)=>{
                console.log(res.info.name,"res");
                return res.info.name.includes(searchText)
              });
              setFilteredResObj(filterdRestro);
            }}
          >
            Search
          </button>
          </div>

        </div>
    <div className="rest-container">
    {filteredResObj.map((resData, index) => (
      <RestaurantCard key={index} resData={resData} />
    ))}
  </div>
  </>
  );
};

export default Body;
