// Initialize the TIC Tac Toe mats and Array for first sending to XoGame class.
var x_oMat = new Array(3); // (3): Size of the game. It can be larger than "3" but winning on the diagonals will onley be on the two main diagonals.
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