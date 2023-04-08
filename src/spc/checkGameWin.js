const checkGameWin = (gameArray) => {
    const gameArrayString = gameArray.join("")
    console.log(gameArrayString)
    const regexList = [
        /^(?:OXO)/mg, // XXX ??? ???
  
         '',]
    
    for (const regex in regexList){
        if(/^(?:XXX)/mg.test(gameArrayString)){
            return true;
        }
    }

    return false;


}

export default checkGameWin;