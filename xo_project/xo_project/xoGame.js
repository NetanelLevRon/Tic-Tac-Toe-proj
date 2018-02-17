var XoGame = (function () {
    function XoGame(xoMat, victoryMat) {
        this.column = XoGame.xoMat.length;
        this.mainDiagonal = XoGame.xoMat.length * 2;
        this.secondDiagonal = (XoGame.xoMat.length * 2) + 1;
        XoGame.xoMat = xoMat;
        XoGame.victoryMat = victoryMat;
    }
    Object.defineProperty(XoGame, "xoArray", {
        get: function () {
            return XoGame._xoArray;
        },
        set: function (xoArr) {
            if (xoArr.length == (Math.pow(XoGame._xoMat.length, 2)) - 1) {
                XoGame._xoArray = xoArr;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XoGame, "victoryMat", {
        get: function () {
            return XoGame._victoryMat;
        },
        set: function (victoryMat) {
            if (victoryMat.length == ((XoGame._xoMat.length * 2) + 2)) {
                XoGame._victoryMat = victoryMat;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XoGame.prototype, "xoMove", {
        get: function () {
            return this._xoMove;
        },
        set: function (move) {
            XoGame.xoArray[move - 1] = 1;
            this._xoMove = move;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XoGame, "xoMat", {
        get: function () {
            return XoGame._xoMat;
        },
        set: function (xo) {
            if (xo.length >= 2) {
                XoGame._xoMat = xo;
            }
        },
        enumerable: true,
        configurable: true
    });
    XoGame.toString = function () {
        XoGame.x_oStrPrompt = "";
        XoGame.x_oStrDoc = "";
        for (var i = 0; i < XoGame.xoMat.length; i++) {
            for (var j = 0; j < XoGame.xoMat[i].length; j++) {
                XoGame.x_oStrPrompt += "|    " + XoGame.xoMat[i][j] + "    ";
                XoGame.x_oStrDoc += "|&nbsp;&nbsp" + XoGame.xoMat[i][j] + "&nbsp;&nbsp;";
            }
            XoGame.x_oStrPrompt += "|\n-----------------------\n";
            XoGame.x_oStrDoc += "|<br/>---------------<br/>";
        }
        return XoGame.x_oStrDoc;
    };
    XoGame.endGame = function (x_o) {
        var chackWin = 0;
        for (var i = 0; i < XoGame.victoryMat.length; i++) {
            for (var j = 0, counter = 0; j < XoGame.victoryMat[i].length; j++) {
                if (XoGame.victoryMat[i][j] == x_o) {
                    counter++;
                }
                if (counter == 3) {
                    return x_o + "won";
                }
            }
        }
        for (var i = 0; i <= XoGame.xoArray.length; i++) {
            if (XoGame.xoArray[i] == 1) {
                chackWin++;
            }
            if (chackWin == (XoGame.xoArray.length)) {
                return "tie";
            }
        }
        return "continue";
    };
    XoGame.prototype.placingMoveInPlace = function (move, x_o) {
        for (var i = 0, counter = 1; i < XoGame.xoMat.length; i++) {
            for (var j = 0; j < XoGame.xoMat[i].length; j++, counter++) {
                if (move == counter) {
                    XoGame.xoMat[i][j] = x_o;
                    XoGame.victoryMat[i][j] = x_o;
                    XoGame.victoryMat[this.column + j][i] = x_o;
                    if (i == j) {
                        XoGame.victoryMat[this.mainDiagonal][i] = x_o;
                    }
                    if (i + j == (XoGame.xoMat[i].length) - 1) {
                        XoGame.victoryMat[this.secondDiagonal][j] = x_o;
                    }
                }
            }
        }
    };
    return XoGame;
}());
XoGame.x_oStrPrompt = "";
XoGame.x_oStrDoc = "";
//# sourceMappingURL=xoGame.js.map