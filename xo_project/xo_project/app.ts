
let obj: XoGame = new XoGame();

XoGame.xoMat = new Array < Array < string >>(3)



XoGame.victoryMat = new Array<Array<string>>(XoGame.xoMat.length * 2 + 2);



for (let i: number = 0, counter: number = 1; i < XoGame.xoMat.length; i++) {

    XoGame.xoMat[i] = new Array<string>(XoGame.xoMat.length);

    for (let j: number = 0; j < XoGame.xoMat[i].length; j++ , counter++) {
        XoGame.xoMat[i][j] = counter + "";

        if (counter <= XoGame.victoryMat.length) {
            XoGame.victoryMat[counter - 1] = new Array<string>(XoGame.xoMat.length)
        }
    }
}




document.write("" + XoGame);



function printXoMat(x_oMat: Array<Array<string>>): void {

    let x_oStrPrompt: string = "";

    let x_oStrDoc: string = "";
    
    for (let i: number = 0; i < x_oMat.length; i++) {
        for (let j: number = 0; j < x_oMat[i].length; j++) {
            x_oStrPrompt += "|    " + x_oMat[i][j] + "    ";
            x_oStrDoc += `|&nbsp;&nbsp${x_oMat[i][j]}&nbsp;&nbsp;`;
        }
        x_oStrPrompt += `|\n-----------------------\n`;
        x_oStrDoc += `|<br/>---------------<br/>`;
    }

}




