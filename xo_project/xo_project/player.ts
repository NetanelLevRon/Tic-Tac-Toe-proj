class Player extends XoGame {

     // ctor: gets the apdated static mats from XoGame class and move as input from the user.
    constructor(xoMat: Array<Array<string>>, victory_Mat: Array<Array<string>>, move: number = Number(prompt(XoGame.x_oStrPrompt + `\nPlease enter your move`))) {

        super(xoMat, victory_Mat);               

        if (XoGame.endGame("x") == "continue"){ //If not, the game is finished and don't do nothing.
            this.xoMove = this.isMoveOk(move);
            this.placingMoveInPlace(this.xoMove, "x");
        }
    }

    //Gets the input from the user and not allowing him to enter wrong move.
    public isMoveOk(move: number): number {

        let flag: boolean = false

        do {

            if (isNaN(move)) { // Letters
                alert(XoGame.x_oStrPrompt + "\nPlease enter numbers only!!");
            }

            else if (move <= 0 || move > (XoGame.xoMat.length) ** 2) { // Smaller or larger than the given possibilities. 
                alert(XoGame.x_oStrPrompt + "\nPlease enter number only between 1 to " + (XoGame.xoMat.length) ** 2);
            }

            else if (XoGame.xoArray[move - 1] == 1) { // The place already taken.
                alert(XoGame.x_oStrPrompt + "\nThe place '" + move + "' olready tacken!!\n Please try again");
            }
            else {
                return move; // If everything is OK.
            }
            move = Number(prompt(XoGame.x_oStrPrompt + `\nPlease enter your move`));

        } while (flag == false)      
    }

}