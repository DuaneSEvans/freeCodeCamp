import React from 'react';

const Categories = ({allCategories, setFilter}) => {
  return (
    allCategories.map((category) => {
      return (
        <button className='filter-btn' onClick={() => (setFilter(category))}>{category}</button>
      );
    })
  );
};

export default Categories;
