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

    const displayPlayers = (playerList) => {
        let display = document.getElementById("playerZone");

        for(i = 0; i < playerList.length; i++){
            let playerShow = document.createElement('div');
                playerShow.innerHTML = gameBoard.players[i].name;
                playerShow.id = "p"+[i]
            display.appendChild(playerShow);
        }
    };

    const displayWinner = (winner) => {
        let display = document.getElementById("announcementZone")
        display.innerHTML = winner
    }

    const wipeBoard = () => {
        for( i = 0; i < gameBoard.board.length; i++){gameBoard.board.splice(i, 1, "")}
        
        document.getElementById("announcementZone").innerHTML = "";
        DisplayController.displayGrid(gameBoard.board)
        
    }

    return {displayGrid, displayPlayers, displayWinner, wipeBoard};

})();

const gameBoard =(() => {
  
    const board = ["","", "",
                   "","", "",
                   "","", "",]

    const players = [
        {
            name: "X Player",
            marker: "X"
        },
        {
            name: "Player O",
            marker: "O"
        }
        ]

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
                    
                    if (!gameBoard.board.includes("")){
                        DisplayController.displayWinner('Tie!')
                    }

                    if (counter >= 3) {
                        DisplayController.displayWinner(`${marker} Wins!`)
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

    name.marker = marker

    gameBoard.players.push(name);

    return{ name, marker }
}

const gameFlow = (p1, p2) =>{
    
    let currentPlayer = p1;

    announcementZone.addEventListener('click', DisplayController.wipeBoard)

    displayGrid.addEventListener('mouseover', (e) =>{
        if (e.target.className === 'cell')
        {e.target.classList.add(`${currentPlayer.marker}hover`)}
    });

    displayGrid.addEventListener('click', (e) => {

        if (e.target.className.charAt(0,1) === 'c' && gameBoard.board[e.target.id.charAt(1)] === ""){

            if (document.getElementById("announcementZone").innerHTML === ""){
        
            gameBoard.board.splice(e.target.id.charAt(1), 1, currentPlayer.marker)
            
            gameBoard.checkWin(currentPlayer.marker)
        
            currentPlayer === p1 ? currentPlayer = p2 : currentPlayer = p1;    
        
            DisplayController.displayGrid(gameBoard.board);

            //



            //
            }
        }
    
    });



};


const playGame = () => {
    gameFlow(gameBoard.players[0], gameBoard.players[1]);
    DisplayController.displayGrid(gameBoard.board);
    DisplayController.displayPlayers(gameBoard.players);

    
}

playGame();    