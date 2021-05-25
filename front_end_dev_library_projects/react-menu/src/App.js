import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


const ALL = 'all';
const allCategories = [ALL, ...new Set(items.map((item) => item.category))];

function App() {
  const [filter, setFilter] = useState(ALL);
  
  return (
    <main>
      <article className='menu'>
        <section className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </section>
        <section className='btn-container'>
          <Categories allCategories={allCategories} setFilter={setFilter}/>
        </section>
        <section className='section-center'>
          <Menu filter={filter} items={items}/>
        </section>
      </article>
    </main>
  );
  
}

export default App;
