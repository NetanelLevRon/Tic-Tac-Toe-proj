class XoGame {

    private static _xoMat: Array<Array<string>>;

    private _xoMove: number;

    private static _xoArray: Array<number>;

    private static _victoryMat: Array<Array<string>>;

    public readonly column: number = XoGame.xoMat.length;

    public readonly mainDiagonal: number = XoGame.xoMat.length * 2;

    public readonly secondDiagonal: number = (XoGame.xoMat.length * 2) + 1;

    public static x_oStrPrompt: string = "";
    public static x_oStrDoc: string = "";

    static set xoArray(xoArr: Array<number>) {
        if (xoArr.length == (XoGame._xoMat.length ** 2) - 1) {
            XoGame._xoArray = xoArr;
        }
    }

    static set victoryMat(victoryMat: Array<Array<string>>) {
        if (victoryMat.length == (XoGame.length * 2) + 2) {
            XoGame._victoryMat = victoryMat;
        }
    }

    static get victoryMat(): Array<Array<string>> {
        return XoGame._victoryMat;
    }


    static get xoArray(): Array<number> {
        return XoGame._xoArray;
    }


    set xoMove(move: number) { 
                XoGame.xoArray[move] = 1;
                this._xoMove = move;
    }

    get xoMove(): number {

        return this._xoMove;
    }


    static set xoMat(xo: Array<Array<string>>) {
        if (xo.length >= 3) {
            XoGame._xoMat = xo;
        }
    }

    static get xoMat(): Array<Array<string>>{
        return XoGame._xoMat;
    }



    public toString(): string {


        for (let i: number = 0; i < XoGame.xoMat.length; i++) {
            for (let j: number = 0; j < XoGame.xoMat[i].length; j++) {
                XoGame.x_oStrPrompt += "|    " + XoGame.xoMat[i][j] + "    ";
                XoGame.x_oStrDoc += `|&nbsp;&nbsp${XoGame.xoMat[i][j]}&nbsp;&nbsp;`;
            }
            XoGame.x_oStrPrompt += `|\n-----------------------\n`;
            XoGame.x_oStrDoc += `|<br/>---------------<br/>`;
        }


        return XoGame.x_oStrDoc;
    }
    




    public static endGame(x_o: string): string {

        let chackWin: number = 0;

        for (let i: number = 0; i < XoGame.victoryMat.length; i++){
            for (let j: number = 0, counter: number = 0; j < XoGame.victoryMat.length; j++) {
                if (XoGame.victoryMat[i][j] == x_o) {
                    counter++;
                }

                if (counter == 3) {
                    return x_o + "won";
                }
            }

        }

        for (let i: number; i < XoGame.xoArray.length;i++) {
            if (XoGame.xoArray[i] == 1) {
                chackWin++;
            }
            if (chackWin == (XoGame.xoArray.length) + 1) {
                return "tie";
            }
        }

        return "continue";
    }



    public placingMoveInPlace(move: number, x_o: string): void {


        for (let i: number = 0, counter = 1; i < XoGame.xoMat.length; i++) {
            for (let j: number = 0; j < XoGame.xoMat[i].length; j++ , counter++) {

                if (move == counter) {

                    XoGame.xoMat[i][j] = x_o;

                    XoGame.victoryMat[i][j] = x_o;
                    XoGame.victoryMat[this.column + j][i] = x_o;
                    if (i == j) {
                        XoGame.victoryMat[this.mainDiagonal][i] = x_o;
                    }
                    if (i + j == (XoGame.xoMat[i].length) - 1) {
                        XoGame.victoryMat[this.secondDiagonal][j] = x_o;
                    }
                }
            }
        }

    }




    constructor() {

        document.write("" + XoGame);
}

}