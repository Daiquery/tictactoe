import "./styles.css"
import { useState } from "react";
import TTBox from "../TTBox"
import checkGameWin from "../../spc/checkGameWin";

const TicTacToeGame = ({p1Name, p2Name}) => {
    const [winner, setWinner] = useState('')
    const [currentTurn, setCurrentTurn] = useState(0)
    const [playerTurn, setPlayerTurn] = useState(0);
    const [tttBoard, setTttBoard] = useState([
        [''],[''],[''],
        [''],[''],[''],
        [''],[''],[''],
    ]);
   
    const handleGameTurn = (index) => {
        let tempTacToe = [...tttBoard];
        playerTurn ? tempTacToe[index] = "X" : tempTacToe[index] = "O"
        setTttBoard(tempTacToe);
        if (checkGameWin(tempTacToe)){
            console.log("winning turn, ", playerTurn);
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
        </div>
    )
}

export default TicTacToeGame;