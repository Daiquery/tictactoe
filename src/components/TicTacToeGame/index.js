import { useState } from "react";
import TTBox from "../TTBox"

const TicTacToeGame = () => {
    const [playerTurn, setPlayerTurn] = useState(0);
    let turnArray = [...Array(9)]
    console.log(turnArray)
   

    return (
        <div>
            {
               turnArray.map((val, index) => {
                   return <TTBox playerMark={val} onClick={() => console.log("pizza")} />
                })
            }
        </div>
    )
}

export default TicTacToeGame;