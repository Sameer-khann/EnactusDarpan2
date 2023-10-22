import React from 'react';
import imgR from "../img/pro.jpg"

// import { IoIosContact } from "react-icons/io";

const Card = (props) => {
  let review = props.reviews;

  return (
    <div className="review-card">
      <div className="card-image">
        {/* <IoIosContact/> */}
        <img className="card-image" src={imgR} alt="Review" />
      </div>
      <div className="card-content">
        <div className="card-title">{review.name}</div>
        <br/>
        {/* <div className="card-job">{review.job}</div> */}
        <div className="card-text">{review.text}</div>
      </div>
    </div>
  );
};

export default Card;