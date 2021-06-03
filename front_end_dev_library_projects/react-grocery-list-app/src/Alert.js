import React, { useEffect } from 'react'

const Alert = ({ listCleared, setListCleared, itemEdited, setItemEdited, itemRemoved, setItemRemoved, itemAdded, setItemAdded, emptyInput, setEmptyInput }) => {

  useEffect(() => {
    let timeout1 = setTimeout(() => {
      setListCleared(false);
    }, 2000);
    let timeout2 = setTimeout(() => {
      setItemRemoved(false);
    }, 2000);
    let timeout3 = setTimeout(() => {
      setItemEdited(false);
    }, 2000)
    let timeout4 = setTimeout(() => {
      setItemAdded(false);
    }, 2000)
    let timeout5 = setTimeout(() => {
      setEmptyInput(false);
    }, 2000)
    return(
      function cleanup() {
        clearTimeout(timeout1, timeout2, timeout3, timeout4, timeout5)
      }
    );
  },[listCleared, itemRemoved, itemEdited, itemAdded, emptyInput])

  return (
    <div className='alert'>
      {listCleared ? 
        <p className='alert-danger'>List Cleared</p>
        : itemEdited ?
        <p className='alert-success'>Item Edited</p>
        : itemRemoved ?
        <p className='alert-danger'>Item Removed</p>
        : itemAdded ? 
        <p className='alert-success'>Item Added</p>
        : emptyInput ?
        <p className='alert-danger'>No Item Added</p>
        : <div></div>
      }
    </div>
  );
}

export default Alert
