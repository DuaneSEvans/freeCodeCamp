import React, { useState } from 'react';

const Question = ({title, info}) => {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }

  return (
    <section className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => handleClick()}>
          {show ? '-' : '+'}
        </button>
      </header> 
      {show && <p>{info}</p>}
    </section>
  );
};

export default Question;
