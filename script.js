const gameBoard =(() => {
  
    const board = ["","", "",
                   "","", "",
                   "","", "",]

    const players = []

    return {
        board,
        players
    };

})();


const createPlayer = (marker) => {
    do {newPlayer = prompt(`Enter Player ${ gameBoard.players.length +1 }'s name:`)}
    while (newPlayer.length < 0) 
        
    newPlayer.marker = marker;
    this.designation = newPlayer

    gameBoard.players.push(newPlayer);
    return{marker, designation}
}

const gameFlow = (p1, p2) =>{
    
    let currentPlayer = p1;    
   
    
    displayGrid.addEventListener('click', (e) => {

        if (e.target.className === 'cell') {
        
            if (gameBoard.board[e.target.id.charAt(1)] === ""){

            gameBoard.board.splice(e.target.id.charAt(1), 1, currentPlayer.marker)   
            
            currentPlayer === p1 ? currentPlayer = p2 : currentPlayer = p1;
            
            }; 
            
            DisplayController.displayGrid(gameBoard.board);

            }
    });
};

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
    };

    return {displayGrid, displayPlayer};
})();

const playGame = () => { 
    let player1 = createPlayer("X")
    let player2 = createPlayer("O")
    DisplayController.displayGrid(gameBoard.board);
    DisplayController.displayPlayer(gameBoard.players);
    gameFlow(player1, player2);
}

playGame();


// const DisplayController = {
//     displayBoard: gameBoard.board.forEach(element => {
//         let cell = document.createElement('div')
//             cell.id = element.indexOf

        
//     }),
// };


// // // const changePlayer = (x) => { 
// // //     if (x.players[0] === currentPlayer){
// // //         players[1]
// // //This was me trying to figure out how to switch the active player, but realized that didn't matter much if I couldn't assign a property to my players
// // };

// };