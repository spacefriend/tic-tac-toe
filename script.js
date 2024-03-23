

//factory for creating new player objects
function createPlayer(name, symbol) {
    const playerName = name;

    const playerSymbol = symbol;
    return { playerName, playerSymbol };
}

function createGameboard() {
    let gameboardEle = document.getElementsByClassName('game-grid');
    let resultsEle = document.getElementById('result-box');

    const gameboard = [{ id: 1, value: '' }, { id: 2, value: '' }, { id: 3, value: '' }, { id: 4, value: '' }, { id: 5, value: '' }, { id: 6, value: '' }, { id: 7, value: '' }, { id: 8, value: '' }, { id: 9, value: '' }];

   
    
    
    return{ gameboardEle, gameboard, resultsEle}
}



    function game(newGameboard, gameboardEle, resultsEle) {

        const player1 = createPlayer('Player 1', 'X');
        const player2 = createPlayer('Player 2', 'O');

      //  let newGameboard = gameboard;
        let gameWon = false;
        let currentPlayer = player1;
        let currentTurn = 1;
       // let gameboardEle = gameboardEleTest;

        let newGameBtn = document.getElementById("new-game-btn");

    
        newGameBtn.addEventListener('click', (e) => {newGame()}, false);

        gameboardEle[0].addEventListener('click', (e) => {playTurn(gameboardEle[0].id)}, false);
        gameboardEle[1].addEventListener('click', (e) => {playTurn(gameboardEle[1].id)}, false);
        gameboardEle[2].addEventListener('click', (e) => {playTurn(gameboardEle[2].id)}, false);
        gameboardEle[3].addEventListener('click', (e) => {playTurn(gameboardEle[3].id)}, false);
        gameboardEle[4].addEventListener('click', (e) => {playTurn(gameboardEle[4].id)}, false);
        gameboardEle[5].addEventListener('click', (e) => {playTurn(gameboardEle[5].id)}, false);
        gameboardEle[6].addEventListener('click', (e) => {playTurn(gameboardEle[6].id)}, false);
        gameboardEle[7].addEventListener('click', (e) => {playTurn(gameboardEle[7].id)}, false);
        gameboardEle[8].addEventListener('click', (e) => {playTurn(gameboardEle[8].id)}, false);

        
            

        

        function playTurn(moveId){

            let invalidMove = false;
            let move = moveId.slice(1);

            invalidMove = playerMove(newGameboard, move, currentPlayer.playerSymbol);
            gameWon = checkWin(newGameboard, currentPlayer.playerSymbol);

            if (gameWon == true){
                return
            }

            if (invalidMove == true){
                return;
            }else{

                if (currentPlayer.playerName == 'Player 1'){
                    currentPlayer = player2
                }else{
                    currentPlayer = player1
                }
                currentTurn += 1;
        }   

        }

        function playerMove(gameboard, move, symbol) {
            gameboard.value = symbol;
            if (createGameboard().gameboardEle[move].innerHTML == 'X' || createGameboard().gameboardEle[move].innerHTML == 'O'){
                invalidMove = true;
                return invalidMove;

            }
                createGameboard().gameboardEle[move].innerHTML = symbol;
                newGameboard[move].value = symbol;
                console.log(newGameboard)
            
            

        }

     

       
        function newGame (){
            clearGrid();
            clearGameboard();
            currentTurn = 1;
            currentPlayer = player1;
            

        }

        function clearGrid(){
            for (let i = 0; i <= 8; i++){
                createGameboard().gameboardEle[i].innerHTML = '';

            }
        }

        function clearGameboard(){
            for (let i = 0; i <= 8; i++){
                newGameboard[i].value = '';
            }
        }

        

        
/* 
            for (turn = 1; turn < 10 && gameWon != true; turn++) {
                checkCurrentPlayer(turn);
            // let move = prompt(currentPlayer.playerName + "'s move!");
                // for testing
                let move = createGameboard().move;
                playerMove(newGameboard, move, currentPlayer.playerSymbol);
                checkWin(newGameboard, currentPlayer.playerSymbol);

            } */
        

        //checks which player's turn it is
     /*    function checkCurrentPlayer(turn) {
            if (turn % 2 == 0) {
                currentPlayer = player2
            }
            else {
                currentPlayer = player1;
            }
        } */
        //adds move to the gameboard
       
        //checks if the current board state results in a win
        function checkWin(gameboard, symbol) {
            if (gameboard[0].value == symbol && gameboard[1].value == symbol && gameboard[2].value == symbol) {
                gameWon = true;
                console.log(currentPlayer.playerName + ' wins!');
                resultsEle.innerHTML = currentPlayer.playerName + ' wins!';
                return gameWon;

            }
            else if (gameboard[3].value == symbol && gameboard[4].value == symbol && gameboard[5].value == symbol) {
                gameWon = true;
                console.log(currentPlayer.playerName + ' wins!');
                resultsEle.innerHTML = currentPlayer.playerName + ' wins!';
                return gameWon;
            }
            else if (gameboard[6].value == symbol && gameboard[7].value == symbol && gameboard[8].value == symbol) {
                gameWon = true;
                console.log(currentPlayer.playerName + ' wins!');
                resultsEle.innerHTML = currentPlayer.playerName + ' wins!';
                return gameWon;
            }
            else if (gameboard[0].value == symbol && gameboard[3].value == symbol && gameboard[6].value == symbol) {
                gameWon = true;
                console.log(currentPlayer.playerName + ' wins!');
                resultsEle.innerHTML = currentPlayer.playerName + ' wins!';
                return gameWon;
            }
            else if (gameboard[1].value == symbol && gameboard[4].value == symbol && gameboard[7].value == symbol) {
                gameWon = true;
                console.log(currentPlayer.playerName + ' wins!');
                resultsEle.innerHTML = currentPlayer.playerName + ' wins!';
                return gameWon;
            }
            else if (gameboard[2].value == symbol && gameboard[5].value == symbol && gameboard[8].value == symbol) {
                gameWon = true;
                console.log(currentPlayer.playerName + ' wins!');
                resultsEle.innerHTML = currentPlayer.playerName + ' wins!';
                return gameWon;
            }
            else if (gameboard[0].value == symbol && gameboard[4].value == symbol && gameboard[8].value == symbol) {
                gameWon = true;
                console.log(currentPlayer.playerName + ' wins!');
                resultsEle.innerHTML = currentPlayer.playerName + ' wins!';
                return gameWon;
            }
            else if (gameboard[2].value == symbol && gameboard[4].value == symbol && gameboard[6].value == symbol) {
                gameWon = true;
                console.log(currentPlayer.playerName + ' wins!');
                resultsEle.innerHTML = currentPlayer.playerName + ' wins!';
                return gameWon;
            }
            else if (currentTurn == 9){
                console.log("It's a draw!")
                resultsEle.innerHTML = "It's a draw";
                return gameWon;
                
            }else{
                return gameWon;
            }

            
        }
        
        

}

window.onload = function () {
    game(createGameboard().gameboard, createGameboard().gameboardEle, createGameboard().resultsEle);
}


