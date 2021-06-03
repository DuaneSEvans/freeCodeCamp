import React, { useState, useEffect } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'


function App() {
  const [color, setColor] = useState('');
  const [list, setList] = useState(new Values('#ff002a').all(10));
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setList(new Values(color).all(10));
      setError(false);
    }
    catch(error) {
      setError(true);
      console.log(error);
    }
  }
  
  
  return (
    <main>
      <section className='container'>
      <h3>Color Generator</h3>
      <form className='container' onSubmit={handleSubmit}>
        <input 
          type='text' 
          id='color' 
          name='color' 
          onChange={(e) => setColor(e.target.value)} 
          value={color} 
          placeholder={'#ff002a'}
          className={error ? "error" : null}
        >
        </input>
        <button type='submit' className='btn'>Submit</button>
      </form>
    </section>
    <article className='colors'>
      {list.map((color,index)=> {
        return(
          <SingleColor {...color} key={index} index={index} hex={color.hex}/>
        );
      })}
    </article>
    </main>
    
  );
}

export default App
