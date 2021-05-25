import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [currentID, setID] = useState(1);
  const {name, job, image, text} = people[currentID - 1];
  
  function changeReview(change) {
    let newID = currentID + change;

    if (newID === 0) {
      newID = people.length;
    }
    else if (newID > people.length){
      newID = 1;
    }
    setID(newID);
  }

  function randomChange() {
    return Math.floor(Math.random() * (people.length - 1)) + 1;
  }

  return (
      <article className='review'>
        <section className='img-container'>
          <img src={image} alt='' className='person-img'/>
          <i className='quote-icon'><FaQuoteRight/></i>
        </section>
        <section className='container'>
          <h4 className='author'>{name}</h4>
          <p className='job'>{job}</p>
          <p className='info'>{text}</p>
          <button className='prev-btn' onClick={() => changeReview(-1)}><FaChevronLeft/></button>
          <button className='next-btn' onClick={() => changeReview(1)}><FaChevronRight/></button>
          <br/>
          <button className='random-btn' onClick={() => changeReview(randomChange())}>Surprise me!</button>
        </section>
      </article>
  );
  
};

export default Review;
