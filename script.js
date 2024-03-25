

//factory for creating new player objects
function createPlayer(name, symbol) {
    const playerName = name;

    const playerSymbol = symbol;
    return { playerName, playerSymbol };
}
//creates empty gameboard array, and creates gameboard nodelist from the HTML gameboard
function createGameboard() {
    let gameboardEle = document.getElementsByClassName('game-grid');
    let resultsEle = document.getElementById('result-box');

    const gameboard = [{ id: 1, value: '' }, { id: 2, value: '' }, { id: 3, value: '' }, { id: 4, value: '' }, { id: 5, value: '' }, { id: 6, value: '' }, { id: 7, value: '' }, { id: 8, value: '' }, { id: 9, value: '' }];
    return { gameboardEle, gameboard, resultsEle }
}



function game(newGameboard, gameboardEle, resultsEle) {

    const player1 = createPlayer('Player 1', 'X');
    const player2 = createPlayer('Player 2', 'O');

    let gameWon = false;
    let currentPlayer = player1;
    let currentTurn = 1;
    let newGameBtn = document.getElementById("new-game-btn");

    //creates event listener for new game button
    newGameBtn.addEventListener('click', (e) => { newGame() }, false);

    //creates event listeners for each game grid square
    for (let i = 0; i <= 8; i++) {
        gameboardEle[i].addEventListener('click', (e) => { playTurn(gameboardEle[i].id) }, false);

    }

    //Validates move to make sure it is an empty square
    function changeTurn(invalidMove) {
        if (invalidMove == true) {
            return;
        } else {

            if (currentPlayer.playerName == 'Player 1') {
                currentPlayer = player2
            } else {
                currentPlayer = player1
            }
            resultsEle.innerHTML = currentPlayer.playerName + "'s turn";
        }
    }

    //if gameWon is true, does not execute to prevent continuing game after win
    //calls functions to play turn, gets ID of move by slicing the S from the HTML ID
    function playTurn(moveId) {
        if (gameWon == true) {
            return;
        }

        let invalidMove = false;
        let move = moveId.slice(1);

        invalidMove = playerMove(newGameboard, move, currentPlayer.playerSymbol);
        gameWon = checkWin(newGameboard, currentPlayer.playerSymbol);

        if (gameWon == true) {
            return
        }

        if (gameWon == false) {
            changeTurn(invalidMove);
        }
    }
    //adds move to both HTML game grid and gameboard array object, advances turn
    function playerMove(gameboard, move, symbol) {

        gameboard.value = symbol;
        if (createGameboard().gameboardEle[move].innerHTML == 'X' || createGameboard().gameboardEle[move].innerHTML == 'O') {
            invalidMove = true;
            return invalidMove;
        }
        createGameboard().gameboardEle[move].innerHTML = symbol;
        newGameboard[move].value = symbol;
        currentTurn++;
    }



    //resets game state
    function newGame() {
        clearGrid();
        clearGameboard();
        currentTurn = 1;
        currentPlayer = player1;
        resultsEle.innerHTML = "Player 1's turn";
        gameWon = false;
    }
    //clears moves from HTML grid
    function clearGrid() {
        for (let i = 0; i <= 8; i++) {
            createGameboard().gameboardEle[i].innerHTML = '';

        }
    }
    //clears moves from gameboard array
    function clearGameboard() {
        for (let i = 0; i <= 8; i++) {
            newGameboard[i].value = '';
        }
    }
    //validates gameboard to detect win or draw
    function checkWin(gameboard, symbol) {
        if (gameboard[0].value == symbol && gameboard[1].value == symbol && gameboard[2].value == symbol) {

            console.log(currentPlayer.playerName + ' wins!');
            resultsEle.innerHTML = currentPlayer.playerName + ' wins!';
            return true;

        }
        else if (gameboard[3].value == symbol && gameboard[4].value == symbol && gameboard[5].value == symbol) {

            console.log(currentPlayer.playerName + ' wins!');
            resultsEle.innerHTML = currentPlayer.playerName + ' wins!';
            return true;
        }
        else if (gameboard[6].value == symbol && gameboard[7].value == symbol && gameboard[8].value == symbol) {

            console.log(currentPlayer.playerName + ' wins!');
            resultsEle.innerHTML = currentPlayer.playerName + ' wins!';
            return true;
        }
        else if (gameboard[0].value == symbol && gameboard[3].value == symbol && gameboard[6].value == symbol) {

            console.log(currentPlayer.playerName + ' wins!');
            resultsEle.innerHTML = currentPlayer.playerName + ' wins!';
            return true;
        }
        else if (gameboard[1].value == symbol && gameboard[4].value == symbol && gameboard[7].value == symbol) {

            console.log(currentPlayer.playerName + ' wins!');
            resultsEle.innerHTML = currentPlayer.playerName + ' wins!';
            return true;
        }
        else if (gameboard[2].value == symbol && gameboard[5].value == symbol && gameboard[8].value == symbol) {

            console.log(currentPlayer.playerName + ' wins!');
            resultsEle.innerHTML = currentPlayer.playerName + ' wins!';
            return true;
        }
        else if (gameboard[0].value == symbol && gameboard[4].value == symbol && gameboard[8].value == symbol) {

            console.log(currentPlayer.playerName + ' wins!');
            resultsEle.innerHTML = currentPlayer.playerName + ' wins!';
            return true;
        }
        else if (gameboard[2].value == symbol && gameboard[4].value == symbol && gameboard[6].value == symbol) {

            console.log(currentPlayer.playerName + ' wins!');
            resultsEle.innerHTML = currentPlayer.playerName + ' wins!';
            return true;
        }
        else if (currentTurn == 10) {
            console.log("It's a draw!")
            resultsEle.innerHTML = "It's a draw";
            return true;

        } else {
            return gameWon;
        }
    }
}

window.onload = function () {
    game(createGameboard().gameboard, createGameboard().gameboardEle, createGameboard().resultsEle);
}


