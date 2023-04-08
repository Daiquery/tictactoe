const checkGameWin = (gameArray) => {
    const gameArrayString = gameArray.join("")
    console.log(gameArrayString)
    const regexList = [
        /^(?:OOO|XXX)/mg, // XXX ??? ???
  
         '',]
    
    for (const regex in regexList){
        if(/^(?:OOO|XXX)/mg.test(gameArrayString)){
            return true;
        }
    }

    return false;

}

export default checkGameWin;