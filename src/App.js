import React from 'react';

import './App.css';
import FirstName from './container/firstname';
import LastName from './container/lastname';
import Score from './container/score';
import Details from './container/details';

function App() {
  return (
    <div className="App">
      <FirstName></FirstName>
      <LastName></LastName>
      <Score></Score>
      <hr></hr>
      <Details></Details>
    </div>
  );
}

export default App;
