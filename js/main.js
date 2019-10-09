var app = document.getElementById("app");
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
// Clean me!
function winCheck(arr) {
    if (checkValues(arr[0], arr[1], arr[2]) == 1 || checkValues(arr[0], arr[1], arr[2]) == 2) {
        return checkValues(arr[0], arr[1], arr[2]);
    } else if (checkValues(arr[3], arr[4], arr[5]) == 1 || checkValues(arr[3], arr[4], arr[5]) == 2) {
        return checkValues(arr[3], arr[4], arr[5]);
    } else if (checkValues(arr[6], arr[7], arr[8]) == 1 || checkValues(arr[6], arr[7], arr[8]) == 2) {
        return checkValues(arr[6], arr[7], arr[8]);
    } else if (checkValues(arr[0], arr[3], arr[6]) == 1 || checkValues(arr[0], arr[3], arr[6]) == 2) {
        return checkValues(arr[0], arr[3], arr[6]);
    } else if (checkValues(arr[1], arr[4], arr[7]) == 1 || checkValues(arr[1], arr[4], arr[7]) == 2) {
        return checkValues(arr[1], arr[4], arr[7]);
    } else if (checkValues(arr[2], arr[5], arr[8]) == 1 || checkValues(arr[2], arr[5], arr[8]) == 2) {
        return checkValues(arr[2], arr[5], arr[8]);
    } else if (checkValues(arr[0], arr[4], arr[8]) == 1 || checkValues(arr[0], arr[4], arr[8]) == 2) {
        return checkValues(arr[0], arr[4], arr[8]);
    } else if (checkValues(arr[2], arr[4], arr[6]) == 1 || checkValues(arr[2], arr[4], arr[6]) == 2) {
        return checkValues(arr[2], arr[4], arr[6]);
    }
}

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


/* Page Setup */
function pageLayout() {
    app.innerHTML = "";
    app.setAttribute("class", "container");
    for (var i = 0; i < 5; i++) {
        var div = document.createElement("div");
        div.setAttribute("class", "row mb-4");
        if (i == 0) { //Set up Title
            var title = document.createElement("h1");
            title.setAttribute("class", "display-4 mx-auto mb-6 markerFont");
            title.textContent = "Tic Tac Toe";
            div.appendChild(title);

        } else if (i == 1) { //Board Layout
            createBoard(div);

        } else if (i == 2) { //Turn Counter Setup
            var turnCounter = document.createElement("p");
            turnCounter.setAttribute("class", "mx-auto manjariFont");
            turnCounter.setAttribute("id", "turnCounter");
            turnCounter.textContent = "X Starts the Game...";
            div.appendChild(turnCounter);

        } else if (i == 3) { //Reset Button and Menace Mode
            var resetBtn = document.createElement("button");
            resetBtn.setAttribute("class", "btn btn-dark mx-auto");
            resetBtn.setAttribute("id", "resetBtn");
            resetBtn.innerHTML = "RESET GAME";
            
            var menaceToggleDiv = document.createElement("div");
            var menaceToggleInput = document.createElement("input");
            var menaceToggleLabel = document.createElement("label");
            menaceToggleDiv.setAttribute("class", "custom-control custom-switch mx-auto");

            menaceToggleInput.setAttribute("class", "custom-control-input ml-3");
            menaceToggleInput.setAttribute("type", "checkbox");
            menaceToggleInput.setAttribute("id", "toggleMenace");
            menaceToggleInput.addEventListener("change", menaceMode);

            menaceToggleLabel.setAttribute("class", "custom-control-label manjariFont");
            menaceToggleLabel.setAttribute("for", "toggleMenace");
            menaceToggleLabel.innerHTML = "Menace Mode";

            menaceToggleDiv.appendChild(menaceToggleInput);
            menaceToggleDiv.appendChild(menaceToggleLabel);
            div.appendChild(menaceToggleDiv);
            resetBtn.addEventListener("click", gameReset);
            div.appendChild(resetBtn);
        }
        app.appendChild(div);
    }
}
