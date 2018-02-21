var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Computer = (function (_super) {
    __extends(Computer, _super);
    // ctor: gets the apdated static mats from XoGame class and chackEndGame from the main section that gets it from endGame function.
    function Computer(victory_Mat, xoMat, chackEndGame) {
        var _this = _super.call(this, xoMat, victory_Mat) || this;
        if (chackEndGame == "continue") {
            _this.xoMove = _this.blockingVictoryFunc();
            _this.placingMoveInPlace(_this.xoMove, "o");
        }
        document.write("<br/><br/>" + XoGame + "<br/>"); //Computer class is the last to be called after pushing the button.
        return _this;
    }
    // Try to win if can, else try to block "x" from winning, else to choose random place.
    Computer.prototype.blockingVictoryFunc = function () {
        var t = 0; // Preserve place for sending to xoVictoryMat for chacking.
        var h = 0; // Preserve place for sending to xoVictoryMat for chacking.
        var p = 0; // Preserve place for sending to xoMat.
        var v = 0; // Preserve place for sending to xoMat.
        var move = 0; // For sending to positioning.
        var flag = false; // To prevent blocking if can winning (need to finish the loops first).
        var isFirstPlacing = false; //For larger than 3x3 game mats. checks if 2 "x" are in position to win and placed the "o" in the first place that can be blocked (saves unnecessary run time).
        for (var i = 0; i < XoGame.victoryMat.length; i++) {
            for (var j = 0, counterX = 0, counterO = 0, counter = 0; j < XoGame.victoryMat[i].length; j++) {
                if (XoGame.victoryMat[i][j] == "x") {
                    counterX++;
                    if (counter > 1) {
                        counter--;
                    }
                }
                else if (XoGame.victoryMat[i][j] == "o") {
                    counterO++;
                }
                else if (i < XoGame.xoMat.length) {
                    p = i;
                    v = j;
                    t = i;
                    h = j;
                    counter++;
                }
                else if (i < (XoGame.xoMat.length * 2)) {
                    v = i - this.column;
                    p = j;
                    t = i;
                    h = j;
                    counter++;
                }
                else if (i == (XoGame.xoMat.length * 2)) {
                    p = j;
                    v = j;
                    t = i;
                    h = j;
                    counter++;
                }
                else {
                    p = ((XoGame.xoMat.length) - 1) - j;
                    v = j;
                    t = i;
                    h = j;
                    counter++;
                }
                // For trying win:
                if (counterO >= 2 && counterX <= ((XoGame.xoMat.length) - 3) && counter > 0) {
                    // (XoGame.xoMat.length) - 3: "3" is the minimum option for winning.
                    var temp = XoGame.victoryMat[t][h]; // for make sure                        // counter > 0: if "0" all the line is full. 
                    XoGame.victoryMat[t][h] = "o"; //if the place is correct
                    // for larger than 3x3 game mats.
                    if (XoGame.endGame("o") == "o-won") {
                        move = Number(XoGame.xoMat[p][v]);
                        XoGame.victoryMat[t][h] = temp;
                        return move;
                    }
                    else {
                        XoGame.victoryMat[t][h] = temp;
                        continue;
                    }
                }
                // For trying block:
                if (counterX >= 2 && counterO <= ((XoGame.xoMat.length) - 3) && isFirstPlacing == false && counter >= 1) {
                    if (XoGame.xoArray[move - 1] == 1) {
                        continue;
                    }
                    var chackIfNecessary = XoGame.victoryMat[t][h];
                    XoGame.victoryMat[t][h] = "x";
                    if (XoGame.endGame("x") == "x-won") {
                        move = Number(XoGame.xoMat[p][v]);
                        XoGame.victoryMat[t][h] = chackIfNecessary;
                        flag = true;
                        isFirstPlacing = true;
                    }
                    else {
                        XoGame.victoryMat[t][h] = chackIfNecessary;
                        continue;
                    }
                }
            }
        } // end of loops
        if (flag == true) {
            return move;
        }
        else {
            var chackArr = new Array(); // gets the places that left.
            var randomPlace = 0;
            for (var i = 0; i < XoGame.xoArray.length; i++) {
                if (XoGame.xoArray[i] == 0) {
                    chackArr[chackArr.length] = i + 1;
                }
            }
            randomPlace = Math.round(Math.random() * (chackArr.length - 1));
            move = chackArr[randomPlace];
            return move;
        }
    };
    return Computer;
}(XoGame));
//# sourceMappingURL=computer.js.map