var obj = new XoGame();
XoGame.xoMat = new Array(3);
XoGame.victoryMat = new Array(XoGame.xoMat.length * 2 + 2);
for (var i = 0, counter = 1; i < XoGame.xoMat.length; i++) {
    XoGame.xoMat[i] = new Array(XoGame.xoMat.length);
    for (var j = 0; j < XoGame.xoMat[i].length; j++, counter++) {
        XoGame.xoMat[i][j] = counter + "";
        if (counter <= XoGame.victoryMat.length) {
            XoGame.victoryMat[counter - 1] = new Array(XoGame.xoMat.length);
        }
    }
}
document.write("" + XoGame);
function printXoMat(x_oMat) {
    var x_oStrPrompt = "";
    var x_oStrDoc = "";
    for (var i = 0; i < x_oMat.length; i++) {
        for (var j = 0; j < x_oMat[i].length; j++) {
            x_oStrPrompt += "|    " + x_oMat[i][j] + "    ";
            x_oStrDoc += "|&nbsp;&nbsp" + x_oMat[i][j] + "&nbsp;&nbsp;";
        }
        x_oStrPrompt += "|\n-----------------------\n";
        x_oStrDoc += "|<br/>---------------<br/>";
    }
}
//# sourceMappingURL=app.js.map