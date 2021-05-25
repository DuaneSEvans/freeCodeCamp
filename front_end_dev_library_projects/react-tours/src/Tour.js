import React, { useState } from 'react';


const Tour = ({id, name, info, image, price, removeTour}) => {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <article className='single-tour'>
      <img src={image} alt=''/>
      <footer>
        <div className='tour-info'>
          <h4 className='title'>{name}</h4>
          <h4 className='tour-price'>{price}</h4>
        </div>
        <p>
          {seeMore ? info : `${info.substring(0,200)}...`}
          <button onClick={() => setSeeMore(!seeMore)}>
            {seeMore ? " Show Less" : "Show More"}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  ); 
  

};

export default Tour;
