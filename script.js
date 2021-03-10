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

        let counter = 0;

        for(i = 0; i < winState.length; i++){     
            counter = 0
            
            for(j = 0; j < winState[i].length; j++){

                if (marker === gameBoard.board[winState[i][j]]){
                    counter++

                    if (counter >= 3) {
                        DisplayController.displayWinner(`${marker} Wins!`)
                    }

                    else if (!gameBoard.board.includes("")){
                        DisplayController.displayWinner('Tie!')
                    }
                }
            }
        }
    }
    
    return {
        board,
        players,
        checkWin,
    };

})();


const createPlayer = (name, marker) => {

    gameBoard.players.push(name);

    return{ marker }
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

                if (document.getElementById("announcementZone").innerHTML === ""){
            
                gameBoard.board.splice(e.target.id.charAt(1), 1, currentPlayer.marker)
                
                gameBoard.checkWin(currentPlayer.marker)
            
                currentPlayer === p1 ? currentPlayer = p2 : currentPlayer = p1;    
            
                DisplayController.displayGrid(gameBoard.board);

                }
            }
        }
    
    });

};


const playGame = () => { 
    gameFlow(createPlayer("Xplayer","X"), createPlayer("Oplayer","O"));
    DisplayController.displayGrid(gameBoard.board);
    DisplayController.displayPlayer(gameBoard.players);

    
}

playGame();    