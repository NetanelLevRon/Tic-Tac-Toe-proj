
let x_oMat: Array<Array<string>> = new Array<Array<string>>(3);

let counter: number = 1;

let x_oStrPrompt: string = "";

let x_oStrDoc: string = "";

let x_oMove: number;

let mainDiagonal: number = x_oMat.length + x_oMat.length;

let secondDiagonal: number = x_oMat.length + x_oMat.length + 1;

let victoryOptionsArr: Array<VictoryOptions> = new Array<VictoryOptions>(8);

let blockingVictory: string;

let randomNum: number;

let column: number = x_oMat.length;

let endFlag: boolean = false;



for (let i: number = 0; i < victoryOptionsArr.length; i++) {

    victoryOptionsArr[i] = new VictoryOptions();
    victoryOptionsArr[i].victoryArr = new Array<string>(3)
}


for (let i: number = 0; i < x_oMat.length; i++) {
    x_oMat[i] = new Array<string>(3);
    for (let j: number = 0; j < x_oMat[i].length; j++ , counter++) {
        x_oMat[i][j] = counter + "";
    }
}

for (let i: number = 0; i < x_oMat.length; i++) {
    for (let j: number = 0; j < x_oMat[i].length; j++) {
        x_oStrPrompt += "|    " + x_oMat[i][j] + "    ";
        x_oStrDoc += `|&nbsp;&nbsp${x_oMat[i][j]}&nbsp;&nbsp;`;
    }
    x_oStrPrompt += `|\n-----------------------\n`;
    x_oStrDoc += `|<br/>---------------<br/>`;
}

x_oStrDoc = "";

do {
    x_oMove = Number(prompt(x_oStrPrompt + "\nEnter your next move!"));
    let flag: boolean = false;
    x_oStrPrompt = "";

    for (let i: number = 0, counter = 1; i < x_oMat.length; i++) {

        if (x_oMove > 0 && x_oMove < 10) {

            for (let j: number = 0; j < x_oMat[i].length; j++ , counter++) {

                if (x_oMove == counter) {

                    if (x_oMat[i][j] == "x" || x_oMat[i][j] == "o") {
                        do {
                            x_oMove = Number(prompt(x_oStrPrompt + '\nThis place olready taken!\nPlease enter "x" in other place.'));
                        } while (x_oMat[i][j] == "x" || x_oMat[i][j] == "o");
                    }

                        x_oMat[i][j] = "x";

                        victoryOptionsArr[i].victoryArr[j] = "x";
                        victoryOptionsArr[column+j].victoryArr[i] = "x";
                        if (i == j) {
                            victoryOptionsArr[mainDiagonal].victoryArr[i] = "x";
                        }
                        if (i + j == (x_oMat[i].length) - 1) {
                            victoryOptionsArr[secondDiagonal].victoryArr[j] = "x";
                        }

                        blockingVictory = blockingVictoryFunc(victoryOptionsArr, x_oMat);

                        if (blockingVictory == "not blocked") {

                            endFlag = false;

                            for (let z: number = 0; z < x_oMat.length; z++) {

                                if (flag == true) {
                                    break;
                                }

                                for (let s: number = 0; s < x_oMat[z].length; s++) {


                                    if (x_oMat[z][s] == "x" || x_oMat[z][s] == "o") {
                                    }
                                    else{

                                       

                                        victoryOptionsArr[z].victoryArr[s] = "o";
                                        victoryOptionsArr[column + s].victoryArr[z] = "o";
                                        if (z == s) {
                                            victoryOptionsArr[mainDiagonal].victoryArr[z] = "o";
                                        }
                                        if (z + s == (x_oMat[z].length) - 1) {
                                            victoryOptionsArr[secondDiagonal].victoryArr[z] = "o";
                                        }
                                        x_oMat[z][s] = "o";
                                        flag = true;
                                        break;

                                    }

                                    if (flag) {
                                      
                                        break;
                                    }

                                }


                            }


                   
                        }
                        else if (blockingVictory == "blocked") {
                            endFlag = false;
                        }
                        else if (blockingVictory == "winning") {
                            endFlag = true;
                        }

                }



            }

        }
    }
    for (let p: number = 0; p < x_oMat.length; p++) {

        for (let v: number = 0; v < x_oMat[p].length; v++) {
            x_oStrPrompt += "|    " + x_oMat[p][v] + "    ";
            x_oStrDoc += `|&nbsp&nbsp${x_oMat[p][v]}&nbsp&nbsp`;

        }
        x_oStrPrompt += `|\n-----------------------\n`;
        x_oStrDoc += `|<br/>---------------<br/>`;
    }


    document.write(x_oStrDoc + "");


} while ((x_oMove <= 0 || x_oMove >= 10) || (endFlag == false));








function blockingVictoryFunc(victoryOptionsArr: Array<VictoryOptions>, x_oMat: Array<Array<string>>): string {

    let p: number = 0;
    let v: number = 0;


    for (let i: number = 0; i < victoryOptionsArr.length; i++) {
        for (let j: number = 0, counterX: number = 0, counterO: number = 0,counter = 0; j < victoryOptionsArr[i].victoryArr.length; j++,counter++) {

            if (victoryOptionsArr[i].victoryArr[j] == "x") {
                counterX++;
            }
            else if (victoryOptionsArr[i].victoryArr[j] == "o") {
                counterO++;
            }
            else if (i < 3) {
                p = i;
                v = j;
            }
            else if (i < 6) {
                v = i - column;
                p = j;
            }
            else if (i == 6) {
                p = j;
                v = j;
            }
            else {
                p = i - secondDiagonal;
                v = j;    
            }
                
            if ((counterX == 2 && counterO == 0 && counter == 2) || (counterX == 0 && counterO == 2 && counter == 2)) {


                    x_oMat[p][v] = "o";

                    victoryOptionsArr[p].victoryArr[v] = "o";
                    victoryOptionsArr[column + v].victoryArr[p] = "o";
                    if (p == v) {
                        victoryOptionsArr[mainDiagonal].victoryArr[p] = "o";
                    }
                    if (p + v == (x_oMat[p].length) - 1) {
                        victoryOptionsArr[secondDiagonal].victoryArr[v] = "o";
                    }

                    return "blocked";
                }
                if (counterX == 3 || counterO == 3) {
                    return "winning";
                }


            }


        }

        return "not blocked";

    }
