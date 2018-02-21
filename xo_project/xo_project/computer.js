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
    function Computer(victory_Mat, xoMat, chackEndGame) {
        var _this = _super.call(this, xoMat, victory_Mat) || this;
        if (chackEndGame == "continue") {
            _this.xoMove = _this.blockingVictoryFunc();
            _this.placingMoveInPlace(_this.xoMove, "o");
        }
        document.write("<br/><br/>" + XoGame + "<br/>");
        return _this;
    }
    Computer.prototype.blockingVictoryFunc = function () {
        var t = 0; // for sending to xoVictoryMat for chacking
        var h = 0; // for sending to xoVictoryMat for chacking
        var p = 0; // for sending to xoMat
        var v = 0; // for sending to xoMat
        var move = 0;
        var flag = false;
        var isFirstPlacing = false; //for larger than 3x3 mats chacks if 2 "x" are in possibility to win and placed the "o" in the first place that  to be continue.. 
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
                if (counterO >= 2 && counterX <= ((XoGame.xoMat.length) - 3) && counter >= 1) {
                    //      in this situation he's win and out
                    var chackIfNecessary = XoGame.victoryMat[t][h];
                    XoGame.victoryMat[t][h] = "o";
                    if (XoGame.endGame("o") == "o-won") {
                        move = Number(XoGame.xoMat[p][v]);
                        XoGame.victoryMat[t][h] = chackIfNecessary;
                        return move; ///////////// בעיקרון אם הקאונטר שווה ל0 אי אפשר לדעת אם כבר הוצב משהוא ב"פ" ו"וי".ץ
                    }
                    else {
                        XoGame.victoryMat[t][h] = chackIfNecessary;
                        continue;
                    }
                } /// מפה מחקתי    
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
        } //////////////// end of loops
        if (flag == true) {
            return move; //  יוצא מהתוכנית //////////////////// בסוף התוכנית אחרי 2 הלולאות  
        } //////////////////////////////
        else {
            /**
             * @ chackArr: for entering one of the numbers that left for a random number among them
             */
            var chackArr = new Array();
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