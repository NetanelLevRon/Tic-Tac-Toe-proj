// Initialize the TIC Tac Toe length.
var xoMatSize = Number(prompt('Please enter length of rows and column for the game.'));
do {
    if (xoMatSize > 3) {
        alert('Pay attention you can win or lose only in 3 sequences on the rows, columns and on the two main diagonals');
        alert('The input presentation of the game design only for 3x3 games sorry for the inconvenience');
    }
    else if (xoMatSize < 3) {
        alert('You can not play on this game in less than 3 rows or column!!');
        xoMatSize = Number(prompt('Please enter length of rows and column for the game.'));
    }
} while (xoMatSize < 3);
// Initialize the TIC Tac Toe mats and Array for first sending to XoGame class.
var x_oMat = new Array(xoMatSize);
var victoryMat = new Array(x_oMat.length * 2 + 2);
var x_oArr = new Array(Math.pow(x_oMat.length, 2));
for (var i = 0; i < x_oArr.length; i++) {
    x_oArr[i] = 0;
}
for (var i = 0, counter = 1; i < x_oMat.length; i++) {
    x_oMat[i] = new Array(x_oMat.length);
    for (var j = 0; j < x_oMat[i].length; j++, counter++) {
        x_oMat[i][j] = counter + "";
        if (counter <= victoryMat.length) {
            victoryMat[counter - 1] = new Array(x_oMat.length);
        }
    }
}
XoGame.xoMat = x_oMat;
XoGame.victoryMat = victoryMat;
var obj = new XoGame(x_oMat, victoryMat); // For first initializing and first print.
XoGame.xoArray = x_oArr;
var checkEndGame = "continue"; // For first initializing and first entering to "move()" function.
document.write(XoGame + ""); // First print.
var btn = "<div style= 'text-align:center'> <button onclick=\"move()\">Next turn</button></div>";
function move() {
    if (XoGame.endGame("X") == "continue" && XoGame.endGame("O") == "continue") {
        var game = void 0;
        game = new Player(XoGame.xoMat, XoGame.victoryMat);
        checkEndGame = XoGame.endGame("X");
        if (checkEndGame != "continue") {
            alert(checkEndGame); // Print the value that return from "endGame" method.
        }
        game = new Computer(XoGame.victoryMat, XoGame.xoMat, XoGame.endGame("X"));
        checkEndGame = XoGame.endGame("O");
        if (checkEndGame != "continue") {
            alert(checkEndGame);
        }
        else {
            document.write("" + btn + "<br/><br<br/>");
        }
    }
}
//# sourceMappingURL=app.js.map