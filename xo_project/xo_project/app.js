var x_oMat = new Array(3);
var victoryMat = new Array(x_oMat.length * 2 + 2);
var x_oArr = new Array((Math.pow(x_oMat.length, 2)) - 1);
///////////
for (var i = 0; i < x_oArr.length; i++) {
    x_oArr[i] = 0;
}
////////////
for (var i = 0, counter = 1; i < x_oMat.length; i++) {
    x_oMat[i] = new Array(x_oMat.length);
    for (var j = 0; j < x_oMat[i].length; j++, counter++) {
        x_oMat[i][j] = counter + "";
        if (counter <= victoryMat.length) {
            victoryMat[counter - 1] = new Array(x_oMat.length);
        }
    }
}
//////////////// section for chack ///////////////////
XoGame.xoMat = x_oMat;
XoGame.victoryMat = victoryMat;
var obj = new XoGame(x_oMat, victoryMat);
XoGame.xoArray = x_oArr;
var chackEndGame = "continue";
document.write(XoGame + "");
var gameArr = new Array(Math.pow(XoGame.xoMat.length, 2));
//for (let i: number = 0; i < gameArr.length; i++) {
//    let chackEndGame = "";
//    if (i % 2 == 0 || i % 2 == 2) {
//        gameArr[i] = new Player(XoGame.xoMat, XoGame.victoryMat);
//        chackEndGame = XoGame.endGame("x");
//        if (chackEndGame != "continue") {
//            alert(chackEndGame);
//            break;
//        }
//    }
//    else {
//        gameArr[i] = new Computer(XoGame.victoryMat, XoGame.xoMat);
//        chackEndGame = XoGame.endGame("o");
//        if (chackEndGame != "continue") {
//            alert(chackEndGame);
//            break;
//        }
//    }
//}
var btn = ' <button onclick="move()">Next turn</button>';
function move() {
    if (chackEndGame == "continue") {
        var game = void 0;
        game = new Player(XoGame.xoMat, XoGame.victoryMat, chackEndGame);
        chackEndGame = XoGame.endGame("x");
        if (chackEndGame != "continue") {
            alert(chackEndGame);
        }
        game = new Computer(XoGame.victoryMat, XoGame.xoMat, chackEndGame);
        chackEndGame = XoGame.endGame("o");
        if (chackEndGame != "continue") {
            alert(chackEndGame);
        }
        else {
            document.write("" + btn + "<br/><br<br/>");
        }
    }
}
//# sourceMappingURL=app.js.map