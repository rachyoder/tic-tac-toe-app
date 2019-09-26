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
    for (var i = 0; i < 9; i++) {
        var col = document.createElement("div");
        var letter = document.createElement("h2");
        var classStr = "col-4 px-5 py-5 border grid"
        if (i == 0) {
            classStr.concat("col1 row1 diagLeft");
        } else if (i == 1) {
            classStr.concat("col2 row1");
        } else if (i == 2) {
            classStr.concat("col3 row1 diagRight");
        } else if (i == 3) {
            classStr.concat("col1 row2");
        } else if (i == 4) {
            classStr.concat("col2 row2 diagLeft diagRight");
        } else if (i == 5) {
            classStr.concat("col3 row2");
        } else if (i == 6) {
            classStr.concat("col1 row3 diagRight");
        } else if (i == 7) {
            classStr.concat("col2 row3");
        } else {
            classStr.concat("col3 row3 diagLeft");
        }
        col.setAttribute("id", i);
        letter.setAttribute("id", i);
        col.setAttribute("class", classStr);
        col.addEventListener("click", function (e) {
            if (checkGrid[e.target.id] == 0) {
                //console.log(e.target.id, document.getElementById());
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
            }

        })
        col.appendChild(letter);
        row.appendChild(col);
    }
    boardContainer.appendChild(row);
}

/* Page Setup */
function pageLayout() {
    app.setAttribute("class", "container");
    for (var i = 0; i < 5; i++) {
        var div = document.createElement("div");
        div.setAttribute("class", "row mb-4");
        if (i == 0) {
            var title = document.createElement("h1");
            title.setAttribute("class", "display-4 mx-auto mb-6");
            title.textContent = "Tic Tac Toe";
            div.appendChild(title);
        } else if (i == 1) {
            createBoard(div);
        }
        app.appendChild(div);
    }
    var grid = document.getElementsByClassName("grid");

    //console.log(grid);
    //positionCheck(grid, checkGrid);
}

/* Check Win Conditions */
var checkRowOne = document.getElementsByClassName("row1");
var checkRowTwo = document.getElementsByClassName("row2"); 
var checkRowThree = document.getElementsByClassName("row3"); 
var checkColOne = document.getElementsByClassName("col1"); 
var checkColTwo = document.getElementsByClassName("col2"); 
var checkColThree = document.getElementsByClassName("col3"); 
var checkDiagLeft = document.getElementsByClassName("diagLeft"); 
var checkDiagRight = document.getElementsByClassName("diagRight"); 