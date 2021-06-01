import React, { useState } from 'react';
import data from './data';

function App() {
  const [value, setValue] = useState('');
  const [numberPara, setNumberPara] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setNumberPara(value);
  }

  
  return (
  <main>
    <article>
      <section className='section'>
        <h3>Tired of boring old lorem ipsum?</h3>
        <form className='lorem-form'>
          <label htmlFor='numberOfPara'>Paragraphs : </label>
          <input type='number' id='number' name='number' value={value} onChange={handleChange}></input>
          <button className='btn' onClick={handleSubmit}>Generate!</button>
        </form>
        <section className='section-center'>
          {data.filter((para,index) => {
            return (
              index < numberPara
            );
          }).map((para, index) => {
            return (
              <p className='result' key={index}>{para}</p>
            );
          })}
        </section>
      </section>
    </article>
  </main>  
  
    )
}

export default App;
