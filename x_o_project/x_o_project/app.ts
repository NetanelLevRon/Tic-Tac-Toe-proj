
let x_oMat: Array<Array<string>> = new Array<Array<string>>(3);

let counter: number = 1;

let x_oStrPrompt: string = "";

let x_oStrDoc: string = "";

let x_oMove: number;

let mainDiagonal: number = x_oMat.length + x_oMat.length;

let secondDiagonal: number = x_oMat.length + x_oMat.length + 1;

let victoryOptionsArr: Array<VictoryOptions> = new Array<VictoryOptions>(8);

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


    for (let i: number = 0, counter = 1, x_oStrPrompt = ""; i < x_oMat.length; i++) {

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
                        victoryOptionsArr[j].victoryArr[i] = "x";
                        if (i == j) {
                            victoryOptionsArr[mainDiagonal].victoryArr[i] = "x";
                        }
                        if (i + j == (x_oMat[i].length) - 1) {
                            victoryOptionsArr[secondDiagonal].victoryArr[i] = "x";
                        }


                

                }

                x_oStrPrompt += "|    " + x_oMat[i][j] + "    ";
                x_oStrDoc += `|&nbsp&nbsp${x_oMat[i][j]}&nbsp&nbsp`;

            }
            x_oStrPrompt += `|\n-----------------------\n`;
            x_oStrDoc += `|<br/>---------------<br/>`;
        }
    }
} while (x_oMove <= 0 || x_oMove >= 10);

document.write(x_oStrDoc + "");



victoryOptionsArr[0].victoryArr[0] = "x";


