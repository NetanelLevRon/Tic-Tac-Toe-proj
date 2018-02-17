class Player extends XoGame {

    public readonly isPlayer: boolean = true;







    constructor(xoMat: Array<Array<string>>, victory_Mat: Array<Array<string>>, move: number = Number(prompt(XoGame.x_oStrPrompt + `\nPlease enter your move`))) {

        super(xoMat, victory_Mat);               

        this.xoMove = this.isMoveOk(move);

        this.placingMoveInPlace(this.xoMove, "x");

        document.write(XoGame + "");

    }





    public isMoveOk(move: number): number {

        let flag: boolean = false

        do {

            if (isNaN(move)) {
                alert(XoGame.x_oStrPrompt + "\nPlease enter numbers only!!");
                
            }

            else if (move <= 0 || move > (XoGame.xoMat.length) ** 2) {
                alert(XoGame.x_oStrPrompt + "\nPlease enter number only between 1 to " + (XoGame.xoMat.length) ** 2);
                
            }

            else if (XoGame.xoArray[move] == 1) {
                alert(XoGame.x_oStrPrompt + "\nThe place '"+ move +"' olready tacken!!\n Please try again");
                
            }
            else {
                return move;
            }

            move = Number(prompt(XoGame.x_oStrPrompt + `\nPlease enter your move`));

        } while (flag == false)

      
    }



}