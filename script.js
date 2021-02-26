const gameBoard =(() => {
     // This is a cool new thing called a module. I think that the reason I'm using it is because takes a bunch of different types of functions and lets you access them as methods.
    const board = ["","", "",
                   "","", "",
                   "","", "",]
    //This is array for the game board data. It starts off empty. 
    const players = []
    //This is an array for the players in this game. I'm not sure this is the best way to store them, for ease of access and checking their statuses
    displayGrid.addEventListener('click', (turn) => {
    //We're going to listen for a click on the grid

        if (turn.target.className === 'cell'){
            //as long as it's on a cell
        gameBoard.board.splice(turn.target.id.charAt(1), 1, 'X')
            //take the character id of that cell and split 1 X onto it Later this will have to look at the players to see which character to write
    }
        DisplayController.displayGrid(gameBoard.board);
        //and then show the grid from our board object again.

        console.table(players)
        //who are my players, and what properties do they have. 
    });

    return {
        board,
        players
    };
    //returning this makes it so that we can access our board and players methods

})();

const changePlayer = (x) => { 
    if (x.players[0] === currentPlayer){
        players[1]
//This was me trying to figure out how to switch the active player, but realized that didn't matter much if I couldn't assign a property to my players
};

};


const createPlayer = () => {
    //make a function that creates players    
    do {getPlayerName = prompt(`Enter Player ${ gameBoard.players.length +1 }'s name:`)}
        while (getPlayerName.length < 0) 
        //while you don't have a name, get a name. 
        //add other data validation here later

    gameBoard.players.push(getPlayerName);
        //push that name into our gameboard.players array

        //maybe create more properties for the players here?
}

const playGame = () => { 
    createPlayer()
    createPlayer()
    DisplayController.displayGrid(gameBoard.board);
    DisplayController.displayPlayer(gameBoard.players);   
    //this plays the game, create a player, and then do it again, and then show the grid and the players
}
    

const DisplayController = (() => {
//this manipulates the dom and shows all the things, it's another module
    const displayGrid = (anArray) => {
        //this is a function that takes an array, but only really ever takes the grid array I think that is the point of this exercise here. 
        let display = document.getElementById("displayGrid")
        //make a variable that grabs our div element...
        while (display.firstChild) {display.removeChild(display.lastChild)}
        //...and destroy all its children
        for (i = 0; i < anArray.length; i++){
            let cell = document.createElement('div');
                cell.innerHTML = anArray[i];
                cell.id = "c"+i
                cell.className = "cell"
            display.appendChild(cell);
            //do a loop and make it a bunch of new children. 
        };
    };

    const displayPlayer = (playerList) => {
        //as above, so below....
        let display = document.getElementById("playerZone");

        for(i = 0; i < playerList.length; i++){

            let playerShow = document.createElement('div');
                playerShow.innerHTML = gameBoard.players[i];
                playerShow.id = "p"+[i]
            display.appendChild(playerShow);
        }

    }
    
    return {displayGrid, displayPlayer};
    //oh yeah, and lemme access these methods so that I can call these functions.
})();


playGame();
    //and now do it.


// const DisplayController = {
//     displayBoard: gameBoard.board.forEach(element => {
//         let cell = document.createElement('div')
//             cell.id = element.indexOf

        
//     }),
// };