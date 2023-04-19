import logo from "./logo.svg";
import "./App.css";
import TicTacToeGame from "./components/TicTacToeGame";
import { useState } from "react";

function App() {
  const [gameStart, setGameStart] = useState(0);
  const [p1Name, setP1Name] = useState("");
  const [p2Name, setP2Name] = useState("");
  const items = [...Object.entries(localStorage)];

  const startGame = () => {
    setGameStart(1);
    if (!localStorage.getItem(p1Name)) {
      localStorage.setItem(p1Name, 0);
    }
    if (!localStorage.getItem(p2Name)) {
      localStorage.setItem(p2Name, 0);
    }
  };

  return (
    <div className="App">
      {gameStart ? (
        <TicTacToeGame p1Name={p1Name} p2Name={p2Name} />
      ) : (
        <div>
          <form className="gameInitForm" onSubmit={() => startGame()}>
            <label>
              Player 1:
              <input
                type="text"
                value={p1Name}
                onChange={(e) => setP1Name(e.target.value)}
              />
            </label>
            <label>
              Player 2:
              <input
                type="text"
                value={p2Name}
                onChange={(e) => setP2Name(e.target.value)}
              />
            </label>
            <button type="submit" value="Submit">
              Submit
            </button>
          </form>

          <div className="leaderboard">
            <h1>Leaderboard</h1>
            {Object.entries(localStorage) ? 
             Object.entries(localStorage).map((val, i) => {
                return <h4>{val[0]}                           .........   {val[1]} wins total</h4>
              })
            : 
              <h5>No players yet!</h5>
            }
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
