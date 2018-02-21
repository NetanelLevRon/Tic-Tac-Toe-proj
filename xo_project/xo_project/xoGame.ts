class XoGame {

    constructor(xoMat: Array<Array<string>>, victoryMat: Array<Array<string>>) {

        XoGame.xoMat = xoMat;

        XoGame.victoryMat = victoryMat;
    }


    public readonly column: number = XoGame.xoMat.length;

    public readonly mainDiagonal: number = XoGame.xoMat.length * 2;

    public readonly secondDiagonal: number = (XoGame.xoMat.length * 2) + 1;

    private static _xoMat: Array<Array<string>>;

    private static _xoArray: Array<number>;

    private static _victoryMat: Array<Array<string>>;

    public static x_oStrPrompt: string = "";

    public static x_oStrDoc: string = "";

    private _xoMove: number = 0;


    static set xoMat(xo: Array<Array<string>>) {
        if (xo.length >= 3) {
            XoGame._xoMat = xo;
        }
    }

    static get xoMat(): Array<Array<string>> {
        return XoGame._xoMat;
    }


    static set xoArray(xoArr: Array<number>) {
        if (xoArr.length == XoGame._xoMat.length ** 2) {
            XoGame._xoArray = xoArr;
        }
    }

    static get xoArray(): Array<number> {
        return XoGame._xoArray;
    }


    static set victoryMat(victoryMat: Array<Array<string>>) {
        if (victoryMat.length == ((XoGame._xoMat.length * 2) + 2)) {
            XoGame._victoryMat = victoryMat;
        }
    }

    static get victoryMat(): Array<Array<string>> {
        return XoGame._victoryMat;
    }


    set xoMove(move: number) { 
                XoGame.xoArray[move-1] = 1;
                this._xoMove = move;
    }

    get xoMove(): number {

        return this._xoMove;
    }



    public static toString(): string {
        XoGame.x_oStrPrompt = "";
        XoGame.x_oStrDoc = "<div style='color: blue; text-align: center;font-family: \"Segoe UI\", sans-serif;'>";

        for (let i: number = 0; i < XoGame.xoMat.length; i++) {
            for (let j: number = 0; j < XoGame.xoMat[i].length; j++) {
                XoGame.x_oStrPrompt += "|    " + XoGame.xoMat[i][j] + "    ";
                XoGame.x_oStrDoc += `|&nbsp;&nbsp;&nbsp;&nbsp;${XoGame.xoMat[i][j]}&nbsp;&nbsp;&nbsp;&nbsp;`;
            }
            XoGame.x_oStrPrompt += `|\n------------------------------------\n`;
            XoGame.x_oStrDoc += `|<br/>---------------------------<br/>`;
        }
        XoGame.x_oStrDoc +="</div>"

        return XoGame.x_oStrDoc;
    }
    
    

    public static endGame(x_o: string): string {

        let chacktie: number = 0;

        for (let i: number = 0; i < XoGame.victoryMat.length; i++){
            for (let j: number = 0, counter: number = 0; j < XoGame.victoryMat[i].length; j++) {
                if (XoGame.victoryMat[i][j] == x_o) {
                    counter++;
                }

                if (XoGame.victoryMat[i][j] != x_o) {///for chacking victory on larger than 3x3 mats
                    if (counter > 0) {
                        counter--;
                    }
                }

                if (counter == 3) {
                    return x_o + "-won";
                }
            }

        }

        for (let i: number=0; i <= XoGame.xoArray.length;i++) {
            if (XoGame.xoArray[i] == 1) {
                chacktie++;
            }
            if (chacktie == (XoGame.xoArray.length)) {
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
    
}