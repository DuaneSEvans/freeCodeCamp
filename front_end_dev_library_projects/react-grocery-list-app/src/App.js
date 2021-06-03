import React, { useState } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editID, setEditID] = useState('');

  //To Update as one alert state hook
  const [listCleared, setListCleared] = useState(false);
  const [itemEdited, setItemEdited] = useState(false);
  const [itemRemoved, setItemRemoved] = useState(false);
  const [itemAdded, setItemAdded] = useState(false);
  const [emptyInput, setEmptyInput] = useState(false);

  const newID = () => { return(new Date().getTime().toString());}

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let newItem = {id: newID(), title: value};
    let newList = list;
    if (isEdit) {
      let replaceIndex = newList.findIndex(item => item.id === editID);
      newList[replaceIndex] = newItem;
      setList(newList);
      setValue('');
      setIsEdit(!isEdit);
      setItemEdited(true);
    }
    else if(!value) {
      setEmptyInput(true);
    }
    else {
      newList.push(newItem);
      setList(newList);
      setValue('');
      setItemAdded(true);
    }
  }

  return (
    <section className='section-center'>
      <Alert 
        listCleared={listCleared} 
        setListCleared={setListCleared}
        itemEdited={itemEdited}
        setItemEdited={setItemEdited}
        itemRemoved={itemRemoved}
        setItemRemoved={setItemRemoved}
        itemAdded={itemAdded}
        setItemAdded={setItemAdded}
        emptyInput={emptyInput}
        setEmptyInput={setEmptyInput}
      />
      <form className='grocery-form' onSubmit={handleSubmit}>
        <h3>Grocery List</h3>
        <div className='form-control'>
        <input 
            type='text'
            placeholder='e.g. milk'
            className='grocery'
            onChange={handleChange}
            value={value}
          >
          </input>
          <button
            type='submit'
            className='submit-btn'
          >
            {isEdit? 'Edit' : 'Submit'}
          </button>
        </div>
      </form>
      <div className='grocery-container'>
        <List 
          list={list} 
          value={value} 
          setList={setList} 
          setValue={setValue} 
          setIsEdit={setIsEdit} 
          setEditID={setEditID} 
          setListCleared={setListCleared}
          setItemRemoved={setItemRemoved}
        />
      </div>
      
    </section>
  );
}

export default App
