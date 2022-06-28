import React, {useState} from 'react';
import Counter from "./components/Cntr";
import ClassCounter from "./components/ClassCounter";
function App() {
  const [value,setValue] = useState('4');
  return (
    <div className="App">
        <Counter/>
        <ClassCounter/>
        <Counter/>
        <h1>{value}</h1>
        <input
            type="text"
            value={value}
            onChange={event => setValue(event.target.value)}
        />
    </div>
  );
}

export default App;
