import "./styles.css"
import { useState } from "react";
import TTBox from "../TTBox"
import checkGameWin from "../../spc/checkGameWin";

const TicTacToeGame = ({p1Name, p2Name}) => {
    const [winner, setWinner] = useState('')
    const [tie, setTie] = useState(0)
    const [currentTurn, setCurrentTurn] = useState(0)
    const [playerTurn, setPlayerTurn] = useState(0);
    const [tttBoard, setTttBoard] = useState([
        [' '],[' '],[' '],
        [' '],[' '],[' '],
        [' '],[' '],[' '],
    ]);
   
    const handleGameTurn = (index) => {
        let tempTacToe = [...tttBoard];
        if (winner || tempTacToe[index] != ' ') { return; } 
        playerTurn ? tempTacToe[index] = "X" : tempTacToe[index] = "O"
        setTttBoard(tempTacToe);
        if (checkGameWin(tempTacToe)){
           playerTurn ? setWinner(p2Name) : setWinner(p1Name)
        }
        setCurrentTurn(currentTurn + 1);
        setPlayerTurn(!playerTurn);
        if (tempTacToe.join('').replace(/\s+/g, '').length === 9) {
            setTie(1);
        }

    }

    return (
        <>
             <div className="game">
            {
               tttBoard.map((val, i) => {
                   return <TTBox key={i} playerMark={val} action={() => handleGameTurn(i)} />
                })
            }

        </div>

{tie ? <h1>Tie! No winner.</h1> : (winner ? <h1>{winner}, you win!</h1> : (
              playerTurn ? <h1>{p2Name} 'X', your turn!</h1> : <h1>{p1Name} 'O', your turn!</h1>
                
    ))
    }
        
        </>
   
    )
}

export default TicTacToeGame;