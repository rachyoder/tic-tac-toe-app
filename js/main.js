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
let TOTAL_WIN = 0, TOTAL_LOSS = 0, TOTAL_TIE = 0;

/* Check Which Player Goes */
function turnCheck(e) {
    //check for wins first - then run turn
    var result = winCheck(checkGrid);
    if (result == 1) {
        console.log("X is the winner!");
    } else if (result == 2) {
        console.log("O is the winner!");
    } else {
        // let menace_select = menaceTurn(checkGrid);
        if (checkGrid[e.target.id] == 0) {
            if (turn % 2 == 0) { //Turn for o
                if (MENACE_ACTIVE) {
                    turnCounter.innerHTML = "MENACE is thinking...";
                } else {
                    turnCounter.innerHTML = "Current Turn: X";
                }
                checkGrid[e.target.id] = 2;
                this.innerHTML = "O";
            } else { //Turn for x
                if (MENACE_ACTIVE) {
                    let menace_select = menaceTurn(checkGrid);
                    checkGrid[menace_select] = 1;
                    document.getElementById(menace_select).innerHTML = "X";

                } else {
                    checkGrid[e.target.id] = 1;
                    this.innerHTML = "X";
                }
                turnCounter.innerHTML = "Current Turn: O";
            }
            turn++;
            var gameEnd = winCheck(checkGrid);
            if (gameEnd == 1) {
                if (MENACE_ACTIVE) {
                    turnCounter.innerHTML = "MENACE is the Winner, you feeble Human!"
                } else {
                    turnCounter.innerHTML = "X is the Winner!";
                }
            } else if (gameEnd == 2) {
                turnCounter.innerHTML = "O is the Winner!";
            } else if (turn == 10) {
                turnCounter.innerHTML = "Cat's Game! It's a tie!"
            }
        }
    }
    if (MENACE_ACTIVE) {
        /* Checks Winner For Menace */
        if (winCheck(checkGrid) == 1) {
            for (let i = 1; i <= TURN_STATE_TRACKER.length; i += 2) {
                let key_state_board = TURN_STATE_TRACKER[i].current_board;
                let bead_state_idx = TURN_STATE_TRACKER[i].bead_idx
                STATES[KEY_STATES[key_state_board]].beads[bead_state_idx] += 3;
            }
            TOTAL_WIN++;
            setTimeout(function() {gameReset();}, 3000);

        } else if (winCheck(checkGrid) == 2) {
            for (let i = 1; i <= TURN_STATE_TRACKER.length; i += 2) {
                let key_state_board = TURN_STATE_TRACKER[i].current_board;
                let bead_state_idx = TURN_STATE_TRACKER[i].bead_idx
                STATES[KEY_STATES[key_state_board]].beads[bead_state_idx]--;
            }
            TOTAL_LOSS++;
            setTimeout(function() {gameReset();}, 3000);

        } else if (turn == 10) {
            for (let i = 1; i <= TURN_STATE_TRACKER.length; i += 2) {
                let key_state_board = TURN_STATE_TRACKER[i].current_board;
                let bead_state_idx = TURN_STATE_TRACKER[i].bead_idx
                STATES[KEY_STATES[key_state_board]].beads[bead_state_idx]++;
            }
            TOTAL_TIE++;
            setTimeout(function() {gameReset();}, 3000);

        } else {
            if (turn % 2 == 1) {
                setTimeout(function () {
                    let x_pos = menaceTurn(checkGrid);
                    document.getElementById(x_pos).click();
                }, 1000);
                console.log({ TURN_STATE_TRACKER });
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
        if (checkValues(arr[winCondit[j][0]], arr[winCondit[j][1]], arr[winCondit[j][2]]) == 1 || checkValues(arr[winCondit[j][0]], arr[winCondit[j][1]], arr[winCondit[j][2]]) == 2) {
            return checkValues(arr[winCondit[j][0]], arr[winCondit[j][1]], arr[winCondit[j][2]]);
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
    console.log(MENACE_ACTIVE);
    TURN_STATE_TRACKER = [];
    checkGrid = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    turn = 1;
    pageLayout();
}