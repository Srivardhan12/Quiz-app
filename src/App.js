import React, { useState } from 'react';
import Questions from './Questions.json';
import Display from './display';
import './App.css';

const App = () => {
  const [marks, setMarks] = useState(new Array(Questions.length).fill(0));

  const changeHandler = (index, value) => {
    const tempMarks = [...marks];
    tempMarks[index] = value;
    setMarks(tempMarks);
  };

  return (
    <div className="center">
      {Questions.map((question, index) => (
        <Display key={index} question={question} index={index} changeHandler={changeHandler} />
      ))}
      <button onClick={() => alert(marks.reduce((a, b) => a + b, 0))}>End Quiz</button>
    </div>
  );
};

export default App;
