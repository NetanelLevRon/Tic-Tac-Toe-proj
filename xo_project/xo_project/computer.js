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
    // Ctor: gets the apdated static mats from XoGame class and checkEndGame from the main section that gets it from endGame function.
    function Computer(victory_Mat, xoMat, checkEndGame) {
        var _this = _super.call(this, xoMat, victory_Mat) || this;
        if (checkEndGame == "continue") {
            _this.xoMove = _this.blockingVictoryFunc();
            _this.placingMoveInPlace(_this.xoMove, "O");
        }
        document.write("<br/><br/>" + XoGame + "<br/>"); //Computer class is the last to be called after pushing the button.
        return _this;
    }
    // Try to win if can, else try to block "X" from winning, else choose random place.
    Computer.prototype.blockingVictoryFunc = function () {
        var t = 0; // Preserve place for sending to xoVictoryMat for checking.
        var h = 0; // Preserve place for sending to xoVictoryMat for checking.
        var p = 0; // Preserve place for sending to xoMat.
        var v = 0; // Preserve place for sending to xoMat.
        var move = 0; // For sending to positioning.
        var flag = false; // To prevent blocking if can winning (need to finish the loops first).
        var isFirstPlacing = false; //For larger than 3x3 game mats. checks if 2 "X" are in position to win and placed the "O" in the first place that can be blocked (saves unnecessary run time).
        for (var i = 0; i < XoGame.victoryMat.length; i++) {
            for (var j = 0, counterX = 0, counterO = 0, counter = 0; j < XoGame.victoryMat[i].length; j++) {
                if (XoGame.victoryMat[i][j] == "X") {
                    counterX++;
                }
                else if (XoGame.victoryMat[i][j] == "O") {
                    counterO++;
                }
                else if (i < XoGame.xoMat.length) {
                    p = i;
                    v = j;
                    t = i;
                    h = j;
                    counter++; // If there is no "x" or "o" raise the counter for if empty place left to put a "o".
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
                // For trying winning:
                if (counterO >= 2 && counterX <= ((XoGame.xoMat.length) - 3) && counter > 0) {
                    // (XoGame.xoMat.length) - 3: "3" is the minimum option for winning.
                    var temp = XoGame.victoryMat[t][h]; // For make sure                        // counter > 0: if "0" the line is full. 
                    XoGame.victoryMat[t][h] = "O"; //if the place is correct
                    // For larger than 3x3 game mats.
                    if (XoGame.endGame("O") == "O-won") {
                        move = Number(XoGame.xoMat[p][v]);
                        XoGame.victoryMat[t][h] = temp;
                        return move;
                    }
                    else {
                        XoGame.victoryMat[t][h] = temp;
                        continue;
                    }
                }
                // For try blocking:
                if (counterX >= 2 && counterO <= ((XoGame.xoMat.length) - 3) && isFirstPlacing == false && counter >= 1) {
                    if (XoGame.xoArray[move - 1] == 1) {
                        continue;
                    }
                    var checkIfNecessary = XoGame.victoryMat[t][h];
                    XoGame.victoryMat[t][h] = "X";
                    if (XoGame.endGame("X") == "X-won") {
                        move = Number(XoGame.xoMat[p][v]);
                        XoGame.victoryMat[t][h] = checkIfNecessary;
                        flag = true;
                        isFirstPlacing = true;
                    }
                    else {
                        XoGame.victoryMat[t][h] = checkIfNecessary;
                        continue;
                    }
                }
            }
        } // End of loops
        if (flag == true) {
            return move;
        }
        else {
            var checkArr = new Array(); // Gets the places that left.
            var randomPlace = 0;
            for (var i = 0; i < XoGame.xoArray.length; i++) {
                if (XoGame.xoArray[i] == 0) {
                    checkArr[checkArr.length] = i + 1; // "+1" for i starts with "0" in place "1".
                }
            }
            randomPlace = Math.round(Math.random() * (checkArr.length - 1));
            move = checkArr[randomPlace];
            return move;
        }
    };
    return Computer;
}(XoGame));
//# sourceMappingURL=computer.js.map