var app = document.getElementById("app");
var self = this;
var playerStates = 1;

/* Board Setup */
function createBoard(grid) {
    var boardContainer = document.createElement("div");
    boardContainer.setAttribute("class", "container");
    grid.appendChild(boardContainer);
    var row = document.createElement("div");
    row.setAttribute("class", "row mx-4");
    for (var i = 0; i < 9; i++) {
        var col = document.createElement("div");
        if (i == 0) {
            col.setAttribute("class", "col-4 px-5 py-5 border grid col1 row1 diagLeft");
        } else if (i == 1) {
            col.setAttribute("class", "col-4 px-5 py-5 border grid col2 row1");
        } else if (i == 2) {
            col.setAttribute("class", "col-4 px-5 py-5 border grid col3 row1 diagRight");
        } else if (i == 3) {
            col.setAttribute("class", "col-4 px-5 py-5 border grid col1 row2");
        } else if (i == 4) {
            col.setAttribute("class", "col-4 px-5 py-5 border grid col2 row2 diagLeft diagRight");
        } else if (i == 5) {
            col.setAttribute("class", "col-4 px-5 py-5 border grid col3 row2");
        } else if (i == 6) {
            col.setAttribute("class", "col-4 px-5 py-5 border grid col1 row3 diagRight");
        } else if (i == 7) {
            col.setAttribute("class", "col-4 px-5 py-5 border grid col2 row3");
        } else {
            col.setAttribute("class", "col-4 px-5 py-5 border grid col3 row3 diagLeft");
        }
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
    var checkGrid = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    console.log(grid);
    positionCheck(grid, checkGrid);
}

/* Grid Positions */
var self = this;
function positionCheck(grid, checkGrid) {
    var gridUpdate = checkGrid.map(function (pos, i) {
        grid[i].addEventListener("click", function () {
            if (pos == false) {
                console.log("test");
            } else {
                console.log("other test");
            }
        })
    });

}

/* Check Win Conditions */
// var checkRowOne = document.getElementsByClassName("row1");
// var checkRowTwo = document.getElementsByClassName("row2"); 
// var checkRowThree = document.getElementsByClassName("row3"); 
// var checkColOne = document.getElementsByClassName("col1"); 
// var checkColTwo = document.getElementsByClassName("col2"); 
// var checkColThree = document.getElementsByClassName("col3"); 
// var checkDiagLeft = document.getElementsByClassName("diagLeft"); 
// var checkDiagRight = document.getElementsByClassName("diagRight"); 