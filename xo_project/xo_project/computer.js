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
    function Computer(xoArray, victoryMat) {
        var _this = _super.call(this) || this;
        _this.isPlayer = false;
        var move = _this.blockingVictoryFunc();
        _this.placingMoveInPlace(move, "o");
        XoGame.endGame("o");
        return _this;
    }
    Computer.prototype.blockingVictoryFunc = function () {
        var p = 0;
        var v = 0;
        var placeI = 0;
        var placeJ = 0;
        var move = 0;
        var flag = false;
        for (var i = 0; i < XoGame.victoryMat.length; i++) {
            for (var j = 0, counterX = 0, counterO = 0, counter = 0; j < XoGame.victoryMat[i].length; j++, counter++) {
                if (XoGame.victoryMat[i][j] == "x") {
                    counterX++;
                }
                else if (XoGame.victoryMat[i][j] == "o") {
                    counterO++;
                }
                else if (i < 3) {
                    p = i;
                    v = j;
                }
                else if (i < 6) {
                    v = i - this.column;
                    p = j;
                }
                else if (i == 6) {
                    p = j;
                    v = j;
                }
                else {
                    p = i - this.secondDiagonal;
                    v = j;
                }
                if (XoGame.victoryMat[i][j] == undefined) {
                    placeI = p;
                    placeJ = j;
                }
                if (counterO == 2 && counterX == 0 && counter == 2) {
                    //                                          in this situation he's win and out
                    move = Number(XoGame.victoryMat[p][v]);
                    return move;
                }
                if (counterX == 2 && counterO == 0 && counter == 2) {
                    flag = true;
                    move = Number(XoGame.victoryMat[p][v]);
                }
            }
        }
        if (flag == true) {
            return move; //  יוצא מהתוכנית //////////////////// בסוף התוכנית אחרי 2 הלולאות  
        } //////////////////////////////
        if (XoGame.victoryMat[1][1] == undefined) {
            //  
            //                                                                     יוצא מהתוכנית
            return 5;
        } //////////////////////////////////////
        else {
            move = Number(XoGame.victoryMat[placeI][placeJ]);
            return move;
        }
    };
    return Computer;
}(XoGame));
//# sourceMappingURL=computer.js.map