import React from 'react';
import Card from './Card';
import { useState } from 'react';

// import { MdArrowBackIosNew } from "react-icons/md";
// import { MdArrowForwardIos } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";


import img1 from '../img/pro.jpg';

const ReviewSection = (props) => {
  const [index, setIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      job: 'Web Developer',
      text: `   I recently hired The Desi my interior design needs, and I couldn't be happier with the results. Their team of talented designers transformed my living room into a stylish and functional space that perfectly reflects my taste. From selecting the furniture to choosing the color scheme, their attention to detail was commendable.`,
      image: img1,
    },
    {
      id: 2,
      name: 'Jane Smith',
      job: 'Designer',
      text: `I recently hired The Design Yard for my interior design needs, and I couldn't be happier with the results. Their team of talented designers transformed my living room into a stylish and functional space that perfectly reflects my taste. From selecting the furniture to choosing the color scheme, their attention to detail was commendable.`,
      image: img1,
    },
    {
      id: 3,
      name: 'Mike Johnson',
      job: 'Marketing Specialist',
      text: `I recentesign Yard for my interior design needs, and I couldn't be happier with the results. Their team of talented designers transformed my living room into a stylish and functional space that perfectly reflects my taste. From selecting the furniture to choosing the color scheme, their attention to detail was commendable.`,
      image: img1,
    },
    {
      id: 4,
      name: 'Sarah Thompson',
      job: 'Project Manager',
      text: `I recently hired The Design Yard for my interior design needs, and I couldn't be happier with the results. Their team of talented designers transformed my living room into a stylish and functional space that perfectly reflects my taste. From selecting the furniture to choosing the color scheme, their attention to detail was commendable.`,
      image: img1,
    },
    // Add more review objects as needed
  ];

  function lefthandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function righthandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <div className="review-section">
      <div className="review-button">
        <button onClick={lefthandler} ><BsArrowLeft/></button>
      </div>

      <Card className="review-card" reviews={reviews[index]}></Card>

      <div className="review-button">
        <button onClick={righthandler}><BsArrowRight/></button>
        {/* <button onClick={righthandler}>&#10233;</button> */}
      </div>
    </div>
  );
};

export default ReviewSection;