import { useState } from "react";
import TTBox from "../TTBox"

const TicTacToeGame = ({p1Name, p2Name}) => {
    const [currentTurn, setCurrentTurn] = useState(0)
    const [playerTurn, setPlayerTurn] = useState(0);
    const [turnArray, setTurnArray] = useState([...Array(9)]);
   
    const handleGameTurn = () => {
       let tempArray = [...turnArray]
        tempArray[currentTurn] = "X"
        setTurnArray(tempArray);
        console.log(turnArray)
        // checkGameWin()
        
        setCurrentTurn(currentTurn + 1);
        setPlayerTurn(!playerTurn);
    }

    return (
        <div>
            {
               turnArray.map((val, index) => {
                   return <TTBox key={index} playerMark={val} onClick={() => handleGameTurn()} />
                })
            }
        </div>
    )
}

export default TicTacToeGame;