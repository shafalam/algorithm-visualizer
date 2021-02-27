import React from 'react';
import './App.css';
import DisplayArray from "./components/display-array/display-array"
import useBst from "./hooks/bst"


function App() {
  const {arr, low, high} = useBst()


  return (
    <div className="App">
      <DisplayArray arr={arr} low={low} high={high} />
    </div>
  );
}

export default App;
