class Computer extends XoGame {

     // Ctor: gets the apdated static mats from XoGame class and checkEndGame from the main section that gets it from endGame function.
    constructor(victory_Mat: Array<Array<string>>, xoMat: Array<Array<string>>, checkEndGame: string) {

        super(xoMat, victory_Mat);

        if (checkEndGame == "continue") {  //If not, the game is finished and don't do nothing less than print the mat.
            this.xoMove = this.blockingVictoryFunc();
            this.placingMoveInPlace(this.xoMove, "O");           
        }

        document.write("<br/><br/>" + XoGame +"<br/>"); //Computer class is the last to be called after pushing the button.
    }

    // Try to win if can, else try to block "X" from winning, else choose random place.
    public blockingVictoryFunc(): number {

        let t: number = 0;// Preserve place for sending to xoVictoryMat for checking.
        let h: number = 0;// Preserve place for sending to xoVictoryMat for checking.
        let p: number = 0;// Preserve place for sending to xoMat.
        let v: number = 0;// Preserve place for sending to xoMat.
        let move: number = 0; // For sending to positioning.
        let flag: boolean = false; // To prevent blocking if can winning (need to finish the loops first).
        let isFirstPlacing: boolean = false; //For larger than 3x3 game mats. checks if 2 "X" are in position to win and placed the "O" in the first place that can be blocked (saves unnecessary run time).


        for (let i: number = 0; i < XoGame.victoryMat.length; i++) {
            for (let j: number = 0, counterX: number = 0, counterO: number = 0, counter = 0; j < XoGame.victoryMat[i].length; j++) {
                
                if (XoGame.victoryMat[i][j] == "X") {                  
                    counterX++;
                    if (counter > 1) {  // For larger than 3x3 game mats. for keeping the sequence.
                        counter--;
                    }
                }
                else if (XoGame.victoryMat[i][j] == "O") {
                    counterO++;
                }
               else if (i < XoGame.xoMat.length) {
                    p = i;
                    v = j;
                    t = i;
                    h = j;
                    counter++;
                }
                else if (i < (XoGame.xoMat.length * 2)) {
                    v = i - this.column;
                    p = j;
                    t = i;
                    h = j;
                    counter++;
                }
                else if (i == (XoGame.xoMat.length * 2)) {
                    p = j;
                    v = j;
                    t = i;
                    h = j;
                    counter++;
                }
                else { 
                    p = ((XoGame.xoMat.length) - 1) - j;
                    v = j;
                    t = i;
                    h = j;
                    counter++;
                }

                // For trying win:

                if (counterO >= 2 && counterX <= ((XoGame.xoMat.length) - 3) && counter > 0) {    // ">=": for larger than 3x3 game mats. 
                                                                                                 // (XoGame.xoMat.length) - 3: "3" is the minimum option for winning.
                    let temp = XoGame.victoryMat[t][h]; // For make sure                        // counter > 0: if "0" all the line is full. 
                    XoGame.victoryMat[t][h] = "O";     //if the place is correct
                                                      // for larger than 3x3 game mats.
                    if (XoGame.endGame("O") == "O-won") {
                        move = Number(XoGame.xoMat[p][v]);
                        XoGame.victoryMat[t][h] = temp;
                        return move;
                    }
                    else {
                        XoGame.victoryMat[t][h] = temp;
                        continue;
                    }                   
                }
                
                // For trying block:

                if (counterX >= 2 && counterO <= ((XoGame.xoMat.length) - 3) && isFirstPlacing == false && counter >= 1) {  // Same as above + isFirstPlacing.
                    
                    if (XoGame.xoArray[move - 1] == 1) {  //For larger than 3x3 game mats. for make sure if the place is correct.
                        continue;
                    }

                    let checkIfNecessary = XoGame.victoryMat[t][h];
                    XoGame.victoryMat[t][h] = "X";

                    if (XoGame.endGame("X") == "X-won") {
                        move = Number(XoGame.xoMat[p][v]);
                        XoGame.victoryMat[t][h] = checkIfNecessary;
                        flag = true;
                        isFirstPlacing = true;
                    }
                    else {
                        XoGame.victoryMat[t][h] = checkIfNecessary;
                        continue;
                    }
                }
            }           

        }            // End of loops

        if (flag == true) { // If you can, block.
            return move;     
        }            

        else {    // Enter a random number.

            let checkArr: Array<number> = new Array<number>();   // Gets the places that left.
            let randomPlace: number = 0;

            for (let i: number = 0; i < XoGame.xoArray.length; i++) {
                             
                if (XoGame.xoArray[i] == 0) { // If ther's no "X" or "O".
                    checkArr[checkArr.length] = i + 1;
                }
            }
            randomPlace = Math.round(Math.random() * (checkArr.length-1));
            move = checkArr[randomPlace];

            return move;
        }
    }
}

