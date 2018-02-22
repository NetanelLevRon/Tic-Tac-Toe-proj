/**
 * XoGame-father class for inheritance by Player(user) class and Computer class.
 */
var XoGame = (function () {
    /**
     * @constructor-On the beginig of the game initialized with the two matrices in the main section
    and from then on it's gets his own static mats updated from Player class and Computer class.
     */
    function XoGame(xoMat, victoryMat) {
        //Column, mainDiagonal & secondDiagonal: constent size for all sizes mats.
        //For: calculating winning posibilities.
        this.column = XoGame.xoMat.length;
        this.mainDiagonal = XoGame.xoMat.length * 2;
        this.secondDiagonal = (XoGame.xoMat.length * 2) + 1;
        this._xoMove = 0;
        XoGame.xoMat = xoMat;
        XoGame.victoryMat = victoryMat;
    }
    Object.defineProperty(XoGame, "xoMat", {
        get: function () {
            return XoGame._xoMat;
        },
        /**
            /@xoMat: updated with a new "X" and "O" in every turn.
            for: 1. sending recent content to print.
                  2. using her length for first initializing variables.*/
        set: function (xo) {
            if (xo.length >= 3) {
                XoGame._xoMat = xo;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XoGame, "xoArray", {
        get: function () {
            return XoGame._xoArray;
        },
        /**
        /@xoArray- updated with a "1" on the cell that his number as the input in every turn.
        for: 1. helps to indicate when it's tie.
              2. helps to indicate random place to put an "O".*/
        set: function (xoArr) {
            if (xoArr.length == Math.pow(XoGame._xoMat.length, 2)) {
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
        /**
        /@victoryMat- all possibilities to win.
        for: 1. checking victory.
              2. indication to blocking and winning with "O".*/
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
        /**
        /@xoMove- current move- get from the player and from the computer
        and been send to updating all mats and arrays.*/
        set: function (move) {
            XoGame.xoArray[move - 1] = 1;
            this._xoMove = move;
        },
        enumerable: true,
        configurable: true
    });
    // toString()- print all the current info after two turns and with the end of the game.
    XoGame.toString = function () {
        XoGame.x_oStrPrompt = "";
        XoGame.x_oStrDoc = "<table border=\"1\", style='margin: 50px auto 30px auto;text-align: center;position: relative;width: 300px;height: 300px;overflow: hidden;border-radius: 10px; border-width: 1px;border-color:skyblue;color:black;background-color:antiquewhite;'>";
        for (var i = 0; i < XoGame.xoMat.length; i++) {
            XoGame.x_oStrDoc += "<tr>";
            for (var j = 0; j < XoGame.xoMat[i].length; j++) {
                XoGame.x_oStrDoc += "<td>";
                XoGame.x_oStrPrompt += "|    " + XoGame.xoMat[i][j] + "    ";
                if (XoGame.xoMat[i][j] == "X") {
                    XoGame.x_oStrDoc += "<span style=\"color:darkslategrey;\"><b>" + XoGame.xoMat[i][j] + "</b></span></td>";
                }
                else if (XoGame.xoMat[i][j] == "O") {
                    XoGame.x_oStrDoc += "<span style=\"color:royalblue;\"><b>" + XoGame.xoMat[i][j] + "</b></span></td>";
                }
                else {
                    XoGame.x_oStrDoc += XoGame.xoMat[i][j] + "</td>";
                }
            }
            XoGame.x_oStrPrompt += "|\n-------------------------\n";
            XoGame.x_oStrDoc += "</tr>";
        }
        XoGame.x_oStrDoc += "</table>";
        return XoGame.x_oStrDoc;
    };
    /**
/@endGame- checking if there was a victory or tie and return who is won, tie or if to proceed.
/@param(x_o)-"X" or "O"darkslategrey according to the sender.*/
    XoGame.endGame = function (x_o) {
        var checktie = 0;
        for (var i = 0; i < XoGame.victoryMat.length; i++) {
            for (var j = 0, counter = 0; j < XoGame.victoryMat[i].length; j++) {
                if (XoGame.victoryMat[i][j] == x_o) {
                    counter++;
                }
                if (XoGame.victoryMat[i][j] != x_o) {
                    if (counter > 0) {
                        counter--; // if there wasn't (the current x_o) that means they not sequence.
                    }
                }
                if (counter == 3) {
                    return x_o + "-won";
                }
            }
        }
        for (var i = 0; i <= XoGame.xoArray.length; i++) {
            if (XoGame.xoArray[i] == 1) {
                checktie++;
            }
            if (checktie == (XoGame.xoArray.length)) {
                return "tie";
            }
        }
        return "continue";
    };
    /**
/@placingMoveInPlace- in all mats in all places.
/@param(move)-xoMove- after all the checks.
/@param(x_o)-"X" or "O" according to the sender*/
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
/** /@-printing game movements on input prompt box.*/
XoGame.x_oStrPrompt = "";
/** /@printing game movements on document.write.*/
XoGame.x_oStrDoc = "";
//# sourceMappingURL=xoGame.js.map