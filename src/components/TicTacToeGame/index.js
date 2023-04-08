import "./styles.css"
import { useState } from "react";
import TTBox from "../TTBox"
import checkGameWin from "../../spc/checkGameWin";

const TicTacToeGame = ({p1Name, p2Name}) => {
    const [winner, setWinner] = useState('')
    const [currentTurn, setCurrentTurn] = useState(0)
    const [playerTurn, setPlayerTurn] = useState(0);
    const [tttBoard, setTttBoard] = useState([
        [' '],[' '],[' '],
        [' '],[' '],[' '],
        [' '],[' '],[' '],
    ]);
   
    const handleGameTurn = (index) => {
        if (winner) { return; }
        let tempTacToe = [...tttBoard];
        playerTurn ? tempTacToe[index] = "X" : tempTacToe[index] = "O"
        setTttBoard(tempTacToe);
        if (checkGameWin(tempTacToe)){
           playerTurn ? setWinner(p2Name) : setWinner(p1Name)
        }
        setCurrentTurn(currentTurn + 1);
        setPlayerTurn(!playerTurn);
        

    }

    return (
        <div className="game">
            {
               tttBoard.map((val, i) => {
                   return <TTBox key={i} playerMark={val} action={() => handleGameTurn(i)} />
                })
            }

            {winner ? <h1>{winner}, you win!</h1> : (
              playerTurn ? <h1>{p2Name} 'X', your turn!</h1> : <h1>{p1Name} 'O', your turn!</h1>
                
    )}
        </div>
    )
}

export default TicTacToeGame;