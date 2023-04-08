const checkGameWin = (gameArray) => {
    const gameArrayString = gameArray.join("")
    console.log(gameArrayString)
    const regexList = [
        // horizontal cases
        /^(?:OOO|XXX)/mg, // (WWW) ??? ???
        /^.{3}(?:OOO|XXX).{3}/mg, // ??? (WWW) ???
        /^.{6}(?:OOO|XXX)/mg, /// ??? ??? (WWW)

        // vertical cases
        /^O(.{2})O(.{2})O(.{2})|^X(.{2})X(.{2})X(.{2})/mg, // (W)?? (W)?? (W)??
        /^(.)X(.)(.)X(.)(.)X(.)|^(.)O(.)(.)O(.)(.)O(.)/mg, // ?(W)? ?(W))? ?(W)?
        /^(.{2})O(.{2})O(.{2})O|^(.{2})X(.{2})X(.{2})X/mg, // ??(W) ??(W) ??(W)

        // diagonal cases
        /^O.{3}O.{3}O|^X.{3}X.{3}X/mg, // (W)?? ?(W)? ??(W)
        /^(.{2})O.O.O(.{2})|^(.{2})X.X.X(.{2})/mg // ??(W) ?(W)? (W)??

  ]
    
    for (const regex of regexList){
        if(regex.test(gameArrayString)){
            return true;
        }
    }

    return false;

}

export default checkGameWin;