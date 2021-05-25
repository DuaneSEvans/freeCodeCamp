import React from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {


  return (
    <main>
      <article className='container'>
        <h3>Questions and Answers about login</h3>
        <div>
          <QuestionList />
        </div>
      </article>
    </main>
  );
}

function QuestionList() {
  return (
    data.map((question) => {
      return (
          <SingleQuestion key={question.id} {...question} />
      );
    })
  );
}

export default App;
