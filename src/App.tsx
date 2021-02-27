import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayArray from "./components/display-array/display-array"


function App() {
  const arr: number[] = []
  for(let i = 0; i < 50; i++){
    arr.push(i);
  }

 let low = 0;
 let high = arr.length - 1


  return (
    <div className="App">
      <DisplayArray arr={arr} low={low} high={high} />
    </div>
  );
}

export default App;
