import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

const url = 'https://course-api.com/react-tours-project'


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    let newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchData = () => {
    return (
      fetch(url)
      .then(resp => {
        if(resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        }
        else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then(tours => {
        setTours(tours);
        setIsLoading(false); 
      })
      .catch(error => {
        setIsError(true);
      })
    );
  }

  useEffect( () =>{
    fetchData();
  },[]);

if (isLoading) {
  return (
    <main>
      <Loading /> 
    </main>  
  );
}
else if (isError) {
  return (
    <main>
      <h2 className='title'>Error loading data</h2>
    </main>
  );
}
else if (tours !== 0) {
  return (
    <Tours tours={tours} removeTour={removeTour}/>
  );
}
else {
  return (
    <main>
      <h2 className='title'>
        No Tours Remaining
        <br/>
        <button className='btn' onClick={() => fetchData()}>Refresh</button>
      </h2>
    
    </main>
  );
}
  
}

export default App
