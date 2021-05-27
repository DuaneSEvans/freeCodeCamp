import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [value, setValue] = useState(0)
  const [people, setPeople] = useState(data);

  function updateValue(num) {
    value + num >= data.length ? setValue(0) : value + num < 0 ? setValue(data.length - 1) : setValue(value + num);
    
  }
  /*
  onclick, setValue and then setReview
  But in the background have the useEffect changing value and setReview every 4 seconds
  */

  useEffect(() => {
    let timer1 = setInterval(() => updateValue(1),4500);
    return () => {clearInterval(timer1)};
  }
  ,[value]);

  
  return (
    <React.Fragment>
    <section className='section'>
      <h2 className='title'>Reviews</h2>
      </section>
    <section className='section-center'>
      {people.map((person, personIndex) => {
        const {id, image, name, title, quote} = person
        let position = 'nextSlide';
        if (personIndex === value) {
          position = 'activeSlide';
        }
        if (personIndex === value - 1 || (value === 0 && personIndex === data.length - 1)) {
          position = 'lastSlide';
        }
        return (
        <article className={position} key={id}>
          <img className='person-img' src={image} alt='person who said quote'/>
          <h4>{name}</h4>
          <p className='title'>{title}</p>
          <button type='button' onClick={() => updateValue(-1)}>
            <FiChevronLeft className='prev'/>
          </button>
          <p className='text'>{quote}</p>
          <button type='button' onClick={() => updateValue(1)}>
            <FiChevronRight className='next'/>
          </button>
          <FaQuoteRight className='icon'/>
        </article>
        );
      })}
      
    </section>
    </React.Fragment>
    
    
  );
}

export default App;
