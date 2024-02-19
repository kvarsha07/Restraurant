import React from "react";
import '../App.css'
import { CDN_URL } from "../utils/constant";


const RestaurantCard = (props) => {
  console.log(props);
  const { resData } = props;
  
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData.info;


  if (!resData || !resData.info) {
    return null;
  }
  return (
    <div
      className="res-card"
    >
      <img
        className="rounded-lg"
        alt="res-logo" style={{ width: '100px', height: '100px', border: '2px solid #ccc' }}
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
