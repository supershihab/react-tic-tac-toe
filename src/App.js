import './index.css';
import { useState } from 'react'
import Cell from './components/Cell';

const App = () => {
  const [cells, setCells] = useState(['', '', '', '', '', '', '', '', '']);
  console.log(cells);
  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell key={index} cell={cell} id={index}/>
        ))}
      </div>
      <p></p>
    </div>
  );
}

export default App;
