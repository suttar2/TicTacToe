const gameBoard =(() => {
    
    const board = ["X","O", "X",
                   "X","X", "O",
                   "X","O", " ",]

    const players = []

    return {
        board,
        players
    };

})();


const createPlayer = () => {
    getPlayerName = prompt(`Enter Player ${ gameBoard.players.length +1 }'s name:`)
    gameBoard.players.push(getPlayerName)
    return {
        getPlayerName
    }
}

const playGame = () => {
    createPlayer()
    createPlayer()
    DisplayController.displayGrid(gameBoard.board);
    DisplayController.displayPlayer(gameBoard.players);
    const turncounter = () => {
        
    }
    
}
    

const DisplayController = (() => {

    const displayGrid = (anArray) => {
        
        let display = document.getElementById("displayGrid")

        for (i = 0; i < anArray.length; i++){
            let cell = document.createElement('div');
                cell.innerHTML = anArray[i];
                cell.id = "c"+i
                cell.className = "cell"
            display.appendChild(cell);
        };
    };

    const displayPlayer = (playerList) => {
        let display = document.getElementById("playerZone");

        for(i = 0; i < playerList.length; i++){

            let playerShow = document.createElement('div');
                playerShow.innerHTML = gameBoard.players[i];
                playerShow.id = "p"+[i]
            display.appendChild(playerShow);
        }

    }
    
    return {displayGrid, displayPlayer};
})();


playGame();


// const DisplayController = {
//     displayBoard: gameBoard.board.forEach(element => {
//         let cell = document.createElement('div')
//             cell.id = element.indexOf

        
//     }),
// };