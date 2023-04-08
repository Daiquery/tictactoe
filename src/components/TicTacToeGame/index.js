import { useState } from "react";
import TTBox from "../TTBox"
import checkGameWin from "../../spc/checkGameWin";

const TicTacToeGame = ({p1Name, p2Name}) => {
    const [winner, setWinner] = useState('')
    const [currentTurn, setCurrentTurn] = useState(0)
    const [playerTurn, setPlayerTurn] = useState(0);
    const [turnArray, setTurnArray] = useState([...Array(9)]);
   
    const handleGameTurn = () => {
        debugger;
       let tempArray = [...turnArray]
        playerTurn ? tempArray[currentTurn] = "X" : tempArray[currentTurn] = "O"
        setTurnArray(tempArray);
        console.log(turnArray)
        if (checkGameWin(turnArray)){
            console.log("winning turn, ", playerTurn);
        }
        setCurrentTurn(currentTurn + 1);
        setPlayerTurn(!playerTurn);
    }

    return (
        <div>
            {
               turnArray.map((val, index) => {
                   return <TTBox key={index} playerMark={val} action={() => handleGameTurn()} />
                })
            }
        </div>
    )
}

export default TicTacToeGame;