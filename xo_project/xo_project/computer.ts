class Computer extends XoGame {

    public readonly isPlayer: boolean = false;







    constructor(xoArray: Array<number>,victoryMat: Array<Array<string>>) {

        super()

        let move: number = this.blockingVictoryFunc();
    
        this.placingMoveInPlace(move, "o");

        XoGame.endGame("o");
        
    }








    public blockingVictoryFunc(): number {

        let p: number = 0;
        let v: number = 0;
        let placeI: number = 0;
        let placeJ: number = 0;
        let move: number = 0;
        let flag: boolean = false;



        for (let i: number = 0; i < XoGame.victoryMat.length; i++) {
            for (let j: number = 0, counterX: number = 0, counterO: number = 0, counter = 0; j < XoGame.victoryMat[i].length; j++ , counter++) {





                if (XoGame.victoryMat[i][j] == "x") {
                    counterX++;
                }
                else if (XoGame.victoryMat[i][j] == "o") {
                    counterO++;
                }
                else if (i < 3) {
                    p = i;
                    v = j;
                }
                else if (i < 6) {
                    v = i - this.column;
                    p = j;
                }
                else if (i == 6) {
                    p = j;
                    v = j;
                }
                else {
                    p = i - this.secondDiagonal;
                    v = j;
                }

                if (XoGame.victoryMat[i][j] == undefined) {  //////////// inside the loops
                placeI=p
                placeJ=j
                }

                if (counterO == 2 && counterX == 0 && counter == 2) {  //////////// inside the loops

                    //                                          in this situation he's win and out

                    move = Number(XoGame.victoryMat[p][v])
                    return move
                }
                             



                 if (counterX==2&&counterO == 0 &&counter==2){   
                flag=true
                move = Number(XoGame.victoryMat[p][v])
                }


               
                }

        }

        if (flag == true) {////////////////////////////
            return move     //  יוצא מהתוכנית //////////////////// בסוף התוכנית אחרי 2 הלולאות  
        }            //////////////////////////////

        if (XoGame.victoryMat[1][1] == undefined) {///////////////////////////////
            //  
            //                                                                     יוצא מהתוכנית
            return 5
        }                                             //////////////////////////////////////

        else {
            move = Number(XoGame.victoryMat[placeI][placeJ]);

            return move
        }
    }
}