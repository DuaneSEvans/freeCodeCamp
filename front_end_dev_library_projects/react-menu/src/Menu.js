import React from 'react';

const Menu = ({filter, items}) => {
  
  return (
    items
      .filter((item) => {
        return (
          item.category === filter || filter === 'all'
        );
      })
      .map((item) => {
        const {id, title, price, img, desc} = item;
        return (
          <div className='menu-item' key={id}>
            <img className='photo' src={img} alt=''/>
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <p className='price'>${price}</p>
              </header>
              <div className='item-text'>
                <p>{desc}</p>
              </div>
            </div>
          </div>
      );
      })
  );
};

export default Menu;
