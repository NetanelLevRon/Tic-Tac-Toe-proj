
// Initialize the TIC Tac Toe mats and Array for first sending to XoGame class.
let x_oMat: Array<Array<string>> = new Array<Array<string>>(3); // (3): Size of the game. It can be larger than "3" but winning on the diagonals will onley be on the two main diagonals.
let victoryMat: Array<Array<string>> = new Array<Array<string>>(x_oMat.length * 2 + 2); 
let x_oArr: Array<number> = new Array<number>(x_oMat.length ** 2);

for (let i: number = 0; i < x_oArr.length; i++) {
    x_oArr[i] = 0;
}


for (let i: number = 0, counter: number = 1; i < x_oMat.length; i++) {

    x_oMat[i] = new Array<string>(x_oMat.length);

    for (let j: number = 0; j < x_oMat[i].length; j++ , counter++) {
        x_oMat[i][j] = counter + "";

        if (counter <= victoryMat.length) {
            victoryMat[counter - 1] = new Array<string>(x_oMat.length)
        }
    }
}



XoGame.xoMat = x_oMat;
XoGame.victoryMat = victoryMat;
let obj: XoGame = new XoGame(x_oMat, victoryMat);  // For first initializing and first print.
XoGame.xoArray = x_oArr;
let checkEndGame: string = "continue"; // For first initializing and first entering to "move()" function.

document.write(XoGame + "");  // First print.


let btn: string = "<div style= 'text-align:center'> <button onclick=\"move()\">Next turn</button></div>";


function move(): void {  // Starts over with every push on the "Next turn" button.

    if (XoGame.endGame("X") == "continue" && XoGame.endGame("O") == "continue") {

        let game: XoGame;
        game = new Player(XoGame.xoMat, XoGame.victoryMat);
        checkEndGame = XoGame.endGame("X");
        if (checkEndGame != "continue") {
            alert(checkEndGame);  // Print the value that return from "endGame" method.
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



