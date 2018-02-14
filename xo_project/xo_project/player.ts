class Player extends XoGame {

    public readonly isPlayer: boolean = true;







    constructor(move: number = Number(prompt(XoGame.x_oStrPrompt + `\nPlease enter your move`))) {

        super();       

        this.isMoveOk(move);

        this.xoMove = move;

        this.placingMoveInPlace(move, "x");

        XoGame.endGame("x");

    }





    public isMoveOk(move: number): void {

        let flag: boolean = false

        do {

            if (move == NaN) {
                alert(XoGame.x_oStrPrompt + "\nPlease enter numbers only!!");
                move = Number(prompt(XoGame.x_oStrPrompt + `\nPlease enter your move`));
            }

            if (move <= 0 || move >= (XoGame.xoMat.length) ** 2) {
                alert(XoGame.x_oStrPrompt + "\nPlease enter number only between 1 to " + (XoGame.xoMat.length) ** 2);
                move = Number(prompt(XoGame.x_oStrPrompt + `\nPlease enter your move`));
            }

            if (XoGame.xoArray[move] == 1) {
                alert(XoGame.x_oStrPrompt + "\nThis place olready tacken!!\n Please try again");
                move = Number(prompt(XoGame.x_oStrPrompt + `\nPlease enter your move`));
            }
            else {
                flag = true;
            }

        } while (!flag)

      
    }



}