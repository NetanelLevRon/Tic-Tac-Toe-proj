var x_oMat = new Array(3);
var counter = 1;
var x_oStrPrompt = "";
var x_oStrDoc = "";
var x_oMove;
var mainDiagonal = x_oMat.length + x_oMat.length;
var secondDiagonal = x_oMat.length + x_oMat.length + 1;
var victoryOptionsArr = new Array(8);
var blockingVictory;
var randomNum;
var column = x_oMat.length;
var endFlag = false;
for (var i = 0; i < victoryOptionsArr.length; i++) {
    victoryOptionsArr[i] = new VictoryOptions();
    victoryOptionsArr[i].victoryArr = new Array(3);
}
for (var i = 0; i < x_oMat.length; i++) {
    x_oMat[i] = new Array(3);
    for (var j = 0; j < x_oMat[i].length; j++, counter++) {
        x_oMat[i][j] = counter + "";
    }
}
for (var i = 0; i < x_oMat.length; i++) {
    for (var j = 0; j < x_oMat[i].length; j++) {
        x_oStrPrompt += "|    " + x_oMat[i][j] + "    ";
        x_oStrDoc += "|&nbsp;&nbsp" + x_oMat[i][j] + "&nbsp;&nbsp;";
    }
    x_oStrPrompt += "|\n-----------------------\n";
    x_oStrDoc += "|<br/>---------------<br/>";
}
x_oStrDoc = "";
do {
    x_oMove = Number(prompt(x_oStrPrompt + "\nEnter your next move!"));
    var flag = false;
    x_oStrPrompt = "";
    for (var i = 0, counter_1 = 1; i < x_oMat.length; i++) {
        if (x_oMove > 0 && x_oMove < 10) {
            for (var j = 0; j < x_oMat[i].length; j++, counter_1++) {
                if (x_oMove == counter_1) {
                    if (x_oMat[i][j] == "x" || x_oMat[i][j] == "o") {
                        do {
                            x_oMove = Number(prompt(x_oStrPrompt + '\nThis place olready taken!\nPlease enter "x" in other place.'));
                        } while (x_oMat[i][j] == "x" || x_oMat[i][j] == "o");
                    }
                    x_oMat[i][j] = "x";
                    victoryOptionsArr[i].victoryArr[j] = "x";
                    victoryOptionsArr[column + j].victoryArr[i] = "x";
                    if (i == j) {
                        victoryOptionsArr[mainDiagonal].victoryArr[i] = "x";
                    }
                    if (i + j == (x_oMat[i].length) - 1) {
                        victoryOptionsArr[secondDiagonal].victoryArr[j] = "x";
                    }
                    blockingVictory = blockingVictoryFunc(victoryOptionsArr, x_oMat);
                    if (blockingVictory == "not blocked") {
                        endFlag = false;
                        for (var z = 0; z < x_oMat.length; z++) {
                            if (flag == true) {
                                break;
                            }
                            for (var s = 0; s < x_oMat[z].length; s++) {
                                if (x_oMat[z][s] == "x" || x_oMat[z][s] == "o") {
                                }
                                else {
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
    for (var p = 0; p < x_oMat.length; p++) {
        for (var v = 0; v < x_oMat[p].length; v++) {
            x_oStrPrompt += "|    " + x_oMat[p][v] + "    ";
            x_oStrDoc += "|&nbsp&nbsp" + x_oMat[p][v] + "&nbsp&nbsp";
        }
        x_oStrPrompt += "|\n-----------------------\n";
        x_oStrDoc += "|<br/>---------------<br/>";
    }
    document.write(x_oStrDoc + "");
} while ((x_oMove <= 0 || x_oMove >= 10) || (endFlag == false));
function blockingVictoryFunc(victoryOptionsArr, x_oMat) {
    var p = 0;
    var v = 0;
    for (var i = 0; i < victoryOptionsArr.length; i++) {
        for (var j = 0, counterX = 0, counterO = 0, counter_2 = 0; j < victoryOptionsArr[i].victoryArr.length; j++, counter_2++) {
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
            if ((counterX == 2 && counterO == 0 && counter_2 == 2) || (counterX == 0 && counterO == 2 && counter_2 == 2)) {
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
//# sourceMappingURL=app.js.map