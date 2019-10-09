/* Global Variables */
var turn = 1;
var checkGrid = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let winCondit = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

/* Check Which Player Goes */
function turnCheck(e) {
    //check for wins first - then run turn
    var result = winCheck(checkGrid);
    if (result == 1) {
        console.log("X is the winner!");
    } else if (result == 2) {
        console.log("O is the winner!");
    } else {
        if (checkGrid[e.target.id] == 0) {
            if (turn % 2 == 0) { //Turn for o
                checkGrid[e.target.id] = 2;
                this.innerHTML = "O";
                turnCounter.innerHTML = "Current Turn: X";
            } else { //Turn for x
                checkGrid[e.target.id] = 1;
                this.innerHTML = "X";
                turnCounter.innerHTML = "Current Turn: O";
            }
            turn++;
            var gameEnd = winCheck(checkGrid);
            if (gameEnd == 1) {
                turnCounter.innerHTML = "X is the Winner!";
            } else if (gameEnd == 2) {
                turnCounter.innerHTML = "O is the Winner!";
            } else if (turn == 10) {
                turnCounter.innerHTML = "Cat's Game! It's a tie!"
            }
        }
    }
}

/* Board Setup */
function createBoard(grid) {
    var boardContainer = document.createElement("div");
    boardContainer.setAttribute("class", "container");
    grid.appendChild(boardContainer);
    var row = document.createElement("div");
    row.setAttribute("class", "row mx-4");

    /* Set up Boxes */
    for (var i = 0; i < 9; i++) {
        var boxGrid = document.createElement("div");
        var letter = document.createElement("h2");
        letter.setAttribute("class", "manjariFont")
        var classStr = "col-4 display-4 manjariFont px-3 py-3 text-center border border-dark grid"
        boxGrid.setAttribute('style', "height: 100px; width: 100px;");
        boxGrid.setAttribute("id", i);
        letter.setAttribute("id", i);
        boxGrid.setAttribute("class", classStr);

        /* Checking for clicks */
        boxGrid.addEventListener("click", turnCheck);
        boxGrid.appendChild(letter);
        row.appendChild(boxGrid);
    }
    boardContainer.appendChild(row);
}

/* Check Win Conditions */
function winCheck(arr) {
    for (let j = 0; j < winCondit.length; j++) {
        if (checkValues(
            arr[winCondit[j][0]], arr[winCondit[j][1]], arr[winCondit[j][2]] == 1 ||
        arr[winCondit[j][0]], arr[winCondit[j][1]], arr[winCondit[j][2]] == 2
        )) {
            return arr[winCondit[j][0]], arr[winCondit[j][1]], arr[winCondit[j][2]];
        }
    }
}

/* Adds up values in Array for Win Condition/s */
function checkValues(a, b, c) {
    // if either a, b, or c == 0, return 0
    if (a == 0 || b == 0 || c == 0) {
        return 0;
    }
    // if a + b + c = 3, return 1 
    if (a + b + c === 3) {
        return 1;
    }
    // if a + b + c = 6 return 2
    if (a + b + c === 6) {
        return 2;
    }

}

/* Reset Game Button */
function gameReset() {
    checkGrid = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    turn = 1;
    pageLayout();
}