
import React, { useState } from 'react'
import ColorBlock from './colorBlock'
import ColorForm from './colorForm'
import './App.css';

function App() {
  let [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])

  let colorMap = colors.map((color,i) => {
    return(
      <ColorBlock key={i} color={color} />
    )
  })

  const checkColor = (newColor) =>  {
    const c = new Option().style;
    c.color = newColor
    return c.color !== ""
  }

  const addColor = (newColor) => {
    if(checkColor(newColor)){
      setColors([...colors, newColor])
    }
  }

  return (
    <div className="App">
        {colorMap}  
      <ColorForm addColor={addColor} />
    </div>
  );
}

export default App;
