import logo from './logo.svg';
import './App.css';
import TicTacToeGame from './components/TicTacToeGame';
import { useState } from 'react';

function App() {
  const [gameStart, setGameStart] = useState(0);
  const [p1Name, setP1Name] = useState('');
  const [p2Name, setP2Name] = useState('');

  return (
    <div className="App">

      
{gameStart ? <TicTacToeGame p1Name={p1Name} p2Name={p2Name} /> : (
               <form className="gameInitForm" onSubmit={() => setGameStart(1)}>
               <label>
                 Player 1:
                 <input type="text" value={p1Name} onChange={(e) => setP1Name(e.target.value)} />
               </label>
               <label>
                 Player 2:
                 <input type="text" value={p2Name} onChange={(e) => setP2Name(e.target.value)} />
               </label>
               <button type="submit" value="Submit">Submit</button>
             </form>
                
    )}
      
     
    </div>
  );
}

export default App;
