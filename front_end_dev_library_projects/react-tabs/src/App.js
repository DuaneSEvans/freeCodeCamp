import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [selectedJobIndex, setSelectedJobIndex] = useState(0);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setJobs(data);
    setIsLoading(false);
  }

  useEffect(() =>{
    getData();    
  },[]);

  if(isLoading) {
    return (
      <section className='section'>
        <h3 className='loading'>
          Loading...
        </h3>
      </section>
    );
  }
  else {
    const {company, dates, duties, id, title} = jobs[selectedJobIndex];
    return(
      <main>
        <section className='title section'>
          <h2>Experience</h2>
          <div className='underline'></div>
        </section>
        <article className='jobs-center'>
          <section className='btn-container'>
          {jobs.map((job,index) => {
            const {id, company} = job;
              return (
                <button key={id} className={`job-btn ${index === selectedJobIndex && 'active-btn'}`} onClick={() => setSelectedJobIndex(index)}>
                  {company}
                </button>
              );
          })}
          </section>
          <section className='job-info'>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className='job-date'>{dates}</p>
              {duties.map((duty, index) => {
                return (
                  <div className='job-desc' key={index}>
                    <FaAngleDoubleRight className='job-icon'/>
                    <p>{duty}</p>
                  </div>
                );
              })}
          </section>
        </article>
        <button className='btn' onClick={() => alert('page is for illustrative purposes only')}>See More</button>
      </main>
      
    );
  }
}

export default App
