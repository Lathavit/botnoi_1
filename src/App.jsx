import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState('');
  const [stars, setStars] = useState([]); 

  const handleChange = (event) => {
    setCount(parseInt(event.target.value));
  };

  const print = () => {
    let newStars = [];

    for (let i = 1; i <= count; i++) {
      newStars.push(<div key={i}>{'*'.repeat(i)}</div>);
    }

    for (let i = count - 1; i >= 1; i--) {
      newStars.push(<div key={count + i}>{'*'.repeat(i)}</div>);
    }

    setStars(newStars);
  };

  return (
    <div>
      <label htmlFor="numStarsInput">Input : </label>
      <input
      className='input'
        // type="number"
        id="numStarsInput"
        value={count}
        onChange={handleChange}
      />
      <button onClick={print}>Submit</button>
      <div>{stars}</div>
    </div>
  );
}

export default App
