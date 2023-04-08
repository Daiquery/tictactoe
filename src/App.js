import logo from './logo.svg';
import './App.css';
import TicTacToeGame from './components/TicTacToeGame';

function App() {
  return (
    <div className="App">
      <TicTacToeGame p1Name={"Donte"} p2Name={"Nick"} />
     
    </div>
  );
}

export default App;
