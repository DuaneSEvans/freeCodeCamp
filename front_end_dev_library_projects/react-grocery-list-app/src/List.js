import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ({ list, setList, setValue, setIsEdit, setEditID, setListCleared, setItemRemoved}) => {

  const handleEdit = (item) => {
    setValue(item.title);
    setIsEdit(true);
    setEditID(item.id);
  }

  const handleDelete = (item) => {
    setList(list.filter((element) => element.id !== item.id ));
    setItemRemoved(true);
  }

  const handleClear = () => {
    setListCleared(true);
    setList([]);
  }

  if (list[0]) {
    return (
      <React.Fragment>
        {list.map((item) => {
          const {id, title} = item;
            return(
              <article className='grocery-item' key={id}>
                <p className='title'>{title}</p>
                <div>
                  <button className='edit-btn' onClick={() => handleEdit(item)}><FaEdit /></button>
                  <button className='delete-btn' onClick={() => handleDelete(item)}><FaTrash /></button>
                </div>
              </article>
            );
          })}
        <button className='clear-btn' onClick={handleClear}>Clear List</button>
      </React.Fragment>
    );
  }
  else {
    return <div></div>;
  }
  
}

export default List
