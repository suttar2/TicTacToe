const gameBoard =(() => {
  
    const board = ["","", "",
                   "","", "",
                   "","", "",]

    const players = []

    const checkWin = (marker) => {
        
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

        let counter = 0

        for(i = 0; i < winState.length; i++){     

            counter = 0
            
            for(j = 0; j < winState[i].length; j++){
            
                if (marker === gameBoard.board[winState[i][j]]){
                    counter++

                    if (counter >= 3 && marker === "X") {
                        DisplayController.displayWinner(`${players[0]} Wins!`)
    
                    }
    
                    if (counter >= 3 && marker === "O") {
                        DisplayController.displayWinner(`${players[1]} Wins!`)
    
                    }
    

                }
            

            }

        }

        if (!gameBoard.board.includes("")){
            DisplayController.displayWinner('Tie!')
        }
    }
    
    return {
        board,
        players,
        checkWin,
    };

})();


const createPlayer = (marker) => {
    do {newPlayer = prompt(`Enter Player ${ gameBoard.players.length +1 }'s name:`)}
    while (newPlayer.length < 0) 


    gameBoard.players.push(newPlayer);

    return{marker}
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

            gameBoard.checkWin("X")
            gameBoard.checkWin("O")

            }
    
    });

    return{currentPlayer}

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

    const displayWinner = (winner) => {
        let display = document.getElementById("announcementZone")
        display.innerHTML = winner
    }

    return {displayGrid, displayPlayer, displayWinner};

})();



const playGame = () => { 
    gameFlow(createPlayer("X"), createPlayer("O"));
    DisplayController.displayGrid(gameBoard.board);
    DisplayController.displayPlayer(gameBoard.players);
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





        // for (i = 0; i < winState.length; i++){
        //         if (anArray[i].includes(M)){
        //             test.push(anArray[i])
        //     }
    
        // }
        // console.log(test)




        // anArray.forEach((marker, index) => {
        //     if(element === marker){indicies.push("X"); }
        // });

        // for (i=0; i < winState.length; i++){
        //     if (gameBoard.board[i] === winState[i]){
        //         console.log('winner')
        //     }
        // }

        // return indicies

    