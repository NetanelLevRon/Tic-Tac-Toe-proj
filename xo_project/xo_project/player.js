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
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(move) {
        if (move === void 0) { move = Number(prompt(XoGame.x_oStrPrompt + "\nPlease enter your move")); }
        var _this = _super.call(this) || this;
        _this.isPlayer = true;
        _this.isMoveOk(move);
        _this.xoMove = move;
        _this.placingMoveInPlace(move, "x");
        XoGame.endGame("x");
        return _this;
    }
    Player.prototype.isMoveOk = function (move) {
        var flag = false;
        do {
            if (move == NaN) {
                alert(XoGame.x_oStrPrompt + "\nPlease enter numbers only!!");
                move = Number(prompt(XoGame.x_oStrPrompt + "\nPlease enter your move"));
            }
            if (move <= 0 || move >= Math.pow((XoGame.xoMat.length), 2)) {
                alert(XoGame.x_oStrPrompt + "\nPlease enter number only between 1 to " + Math.pow((XoGame.xoMat.length), 2));
                move = Number(prompt(XoGame.x_oStrPrompt + "\nPlease enter your move"));
            }
            if (XoGame.xoArray[move] == 1) {
                alert(XoGame.x_oStrPrompt + "\nThis place olready tacken!!\n Please try again");
                move = Number(prompt(XoGame.x_oStrPrompt + "\nPlease enter your move"));
            }
            else {
                flag = true;
            }
        } while (!flag);
    };
    return Player;
}(XoGame));
//# sourceMappingURL=player.js.map