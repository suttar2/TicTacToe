const gameBoard =(() => {
    
    const board = ["","", "",
                   "","", "",
                   "","", "",]

    const players = []

    displayGrid.addEventListener('click', (turn) => {

        if (turn.target.className === 'cell'){

        gameBoard.board.splice(turn.target.id.charAt(1), 1, 'X')
        
    }
        DisplayController.displayGrid(gameBoard.board);
        console.table(players)
    });

    return {
        board,
        players
    };

})();

const changePlayer = (x) => { 
    if (x.players[0] === currentPlayer){
        players[1]
    
};

};


const createPlayer = () => {
    
    do {getPlayerName = prompt(`Enter Player ${ gameBoard.players.length +1 }'s name:`)}
        while (getPlayerName.length < 0) 
        
        //add other data validation here

    gameBoard.players.push(getPlayerName);

    gameBoard.players[0].isTurn = true
    gameBoard.players[0].isTurn = false
}

const playGame = () => {
    createPlayer()
    createPlayer()
    DisplayController.displayGrid(gameBoard.board);
    DisplayController.displayPlayer(gameBoard.players);
    
}
    

const DisplayController = (() => {

    const displayGrid = (anArray) => {
        
        let display = document.getElementById("displayGrid")

        while (display.firstChild) {display.removeChild(display.lastChild)}

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