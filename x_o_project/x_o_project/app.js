var x_oMat = new Array(3);
var counter = 1;
var x_oStrPrompt = "";
var x_oStrDoc = "";
var x_oMove;
var mainDiagonal = x_oMat.length + x_oMat.length;
var secondDiagonal = x_oMat.length + x_oMat.length + 1;
var victoryOptionsArr = new Array(8);
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
    for (var i = 0, counter_1 = 1, x_oStrPrompt_1 = ""; i < x_oMat.length; i++) {
        if (x_oMove > 0 && x_oMove < 10) {
            for (var j = 0; j < x_oMat[i].length; j++, counter_1++) {
                if (x_oMove == counter_1) {
                    if (x_oMat[i][j] == "x" || x_oMat[i][j] == "o") {
                        do {
                            x_oMove = Number(prompt(x_oStrPrompt_1 + '\nThis place olready taken!\nPlease enter "x" in other place.'));
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
                x_oStrPrompt_1 += "|    " + x_oMat[i][j] + "    ";
                x_oStrDoc += "|&nbsp&nbsp" + x_oMat[i][j] + "&nbsp&nbsp";
            }
            x_oStrPrompt_1 += "|\n-----------------------\n";
            x_oStrDoc += "|<br/>---------------<br/>";
        }
    }
} while (x_oMove <= 0 || x_oMove >= 10);
document.write(x_oStrDoc + "");
victoryOptionsArr[0].victoryArr[0] = "x";
//# sourceMappingURL=app.js.map