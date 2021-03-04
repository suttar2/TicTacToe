const gameBoard =(() => {
  
    const board = ["","", "",
                   "","", "",
                   "","", "",]

    const players = []

    const checkWin = (anArray) => {
        
        let winState =[

            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],

            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],

            [0, 4, 8],
            [6, 4, 2]
        ]
        
        let indicies = []

        anArray.forEach((element, index) => {
            if(element !== ""){
                indicies.push(index);    
            }
        });

        for (i=0; i<winState.length; i++){
            if (gameBoard.board[i] === winState[i]){
                console.log('winner')
            }
        }

        return indicies

    

    }
    

    return {
        board,
        players,
        checkWin
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
   
    displayGrid.addEventListener('mouseover', (e) =>{

        if (e.target.className === 'cell')
        {e.target.classList.add(`${currentPlayer.marker}hover`)}
         
    });

    displayGrid.addEventListener('click', (e) => {

        if (e.target.className.charAt(0,1) === 'c') {
        
            if (gameBoard.board[e.target.id.charAt(1)] === ""){

            gameBoard.board.splice(e.target.id.charAt(1), 1, currentPlayer.marker)   
            
            currentPlayer === p1 ? currentPlayer = p2 : currentPlayer = p1;
            
            }; 
            
            DisplayController.displayGrid(gameBoard.board);


            let check = gameBoard.checkWin(gameBoard.board)

            console.log("occupied spaces are:", check)
            console.log("the board contains:", gameBoard.board)

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