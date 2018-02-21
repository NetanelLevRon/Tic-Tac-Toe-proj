class Computer extends XoGame {

    
    constructor(victory_Mat: Array<Array<string>>, xoMat: Array<Array<string>>, chackEndGame: string) {

        super(xoMat, victory_Mat);

        if (chackEndGame == "continue") {

            this.xoMove = this.blockingVictoryFunc();

            this.placingMoveInPlace(this.xoMove, "o");

            

        }
        document.write("<br/><br/>" + XoGame + "<br/>");
    }

    public blockingVictoryFunc(): number {


        let t: number = 0;// for sending to xoVictoryMat for chacking
        let h: number = 0;// for sending to xoVictoryMat for chacking
        let p: number = 0;// for sending to xoMat
        let v: number = 0;// for sending to xoMat
        let move: number = 0;
        let flag: boolean = false;
        let isFirstPlacing: boolean = false; //for larger than 3x3 mats chacks if 2 "x" are in possibility to win and placed the "o" in the first place that  to be continue.. 


        for (let i: number = 0; i < XoGame.victoryMat.length; i++) {
            for (let j: number = 0, counterX: number = 0, counterO: number = 0, counter = 0; j < XoGame.victoryMat[i].length; j++) {
                

                if (XoGame.victoryMat[i][j] == "x") {
                  
                    counterX++;
                    if (counter > 1) {
                        counter--;
                    }
                }
                else if (XoGame.victoryMat[i][j] == "o") {
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

                if (counterO >= 2 && counterX <= ((XoGame.xoMat.length) - 3) && counter >= 1) {  //////////// inside the loops

                    //      in this situation he's win and out

                    
                    let chackIfNecessary = XoGame.victoryMat[t][h];
                    XoGame.victoryMat[t][h] = "o";

                    if (XoGame.endGame("o") == "o-won") {
                        move = Number(XoGame.xoMat[p][v]);
                        XoGame.victoryMat[t][h] = chackIfNecessary;
                        return move;///////////// בעיקרון אם הקאונטר שווה ל0 אי אפשר לדעת אם כבר הוצב משהוא ב"פ" ו"וי".ץ
                    }
                    else {
                        XoGame.victoryMat[t][h] = chackIfNecessary;
                        continue;
                    }
                   
                }/// מפה מחקתי    



                if (counterX >= 2 && counterO <= ((XoGame.xoMat.length) - 3) && isFirstPlacing == false && counter >= 1) {/// blocking
                    
                    if (XoGame.xoArray[move - 1] == 1) {
                        continue;
                    }

                    let chackIfNecessary = XoGame.victoryMat[t][h];
                    XoGame.victoryMat[t][h] = "x";

                    if (XoGame.endGame("x") == "x-won") {
                        move = Number(XoGame.xoMat[p][v]);
                        XoGame.victoryMat[t][h] = chackIfNecessary;
                        flag = true;
                        isFirstPlacing = true;
                    }
                    else {
                        XoGame.victoryMat[t][h] = chackIfNecessary;
                        continue;
                    }

                }

            }






                
            

        }//////////////// end of loops

        if (flag == true) {////////////////////////////
            return move;   //  יוצא מהתוכנית //////////////////// בסוף התוכנית אחרי 2 הלולאות  
        }            //////////////////////////////

        //if (isFinite(Number(XoGame.xoMat[++middlePleceI][++middlePleceJ]))) {/////////////as first step he will placed "o" in the middle
        //    move = Number(XoGame.xoMat[++middlePleceI][++middlePleceJ]);

        //    return move;
        //}
        //else if (isFinite(Number(XoGame.xoMat[++middlePleceI][--middlePleceJ]))) {
        //    move = Number(XoGame.xoMat[++middlePleceI][--middlePleceJ]);

        //    return move;
        //}

        else {
            /**
             * @ chackArr: for entering one of the numbers that left for a random number among them   
             */
            let chackArr: Array<number> = new Array<number>();
            let randomPlace: number = 0;

            for (let i: number = 0; i < XoGame.xoArray.length; i++) {
                             
                if (XoGame.xoArray[i] == 0) {
                    chackArr[chackArr.length] = i + 1;
                }
            }
            randomPlace = Math.round(Math.random() * (chackArr.length-1));
            move = chackArr[randomPlace];

            return move;
        }
    }
}

