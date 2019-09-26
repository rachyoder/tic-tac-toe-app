var app = document.getElementById("app");
var self = this;
var turn = 1;
var checkGrid = [0, 0, 0, 0, 0, 0, 0, 0, 0];


/* Board Setup */
function createBoard(grid) {
    var boardContainer = document.createElement("div");
    boardContainer.setAttribute("class", "container");
    grid.appendChild(boardContainer);
    var row = document.createElement("div");
    row.setAttribute("class", "row mx-4");

    /* Set up Boxes */
    for (var i = 0; i < 9; i++) {
        var col = document.createElement("div");
        var letter = document.createElement("h2");
        letter.setAttribute("class", "manjariFont")
        var classStr = "col-4 px-5 py-5 border grid"
        col.setAttribute("id", i);
        letter.setAttribute("id", i);
        col.setAttribute("class", classStr);

        /* Checking for clicks */
        col.addEventListener("click", function (e) {
            if (checkGrid[e.target.id] == 0) {
                if (turn % 2 == 0) { //Turn for o
                    checkGrid[e.target.id] = 2;
                    this.innerHTML = "O";
                    console.log("o");
                } else { //Turn for x
                    checkGrid[e.target.id] = 1;
                    this.innerHTML = "X";
                    console.log("x");
                }
                turn++;
                //console.log(turn);
            }
            if (turn >= 6) { //check for wins as soon as possible
                var result = winCheck(checkGrid);
                if (result == 1) {
                    console.log("X is the winner!");
                    col.removeEventListener("click", click(e));
                } else if (result == 2) {
                    console.log("O is the winner!");
                    col.removeEventListener("click", click(e));
                }
            }

        })
        col.appendChild(letter);
        row.appendChild(col);
    }
    boardContainer.appendChild(row);
}

/* Check Win Conditions */
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

/* Page Setup */
function pageLayout() {
    app.setAttribute("class", "container");
    for (var i = 0; i < 5; i++) {
        var div = document.createElement("div");
        div.setAttribute("class", "row mb-4");
        if (i == 0) {
            var title = document.createElement("h1");
            title.setAttribute("class", "display-4 mx-auto mb-6 markerFont");
            title.textContent = "Tic Tac Toe";
            div.appendChild(title);
        } else if (i == 1) {
            createBoard(div);
        } else if (i == 2) {
            var turnCounter = document.createElement("p");
            //turnCounter.setAttribute("class", "")
        }
        app.appendChild(div);
    }
    var grid = document.getElementsByClassName("grid");
}
