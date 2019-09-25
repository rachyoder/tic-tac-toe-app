var app = document.getElementById("app");
var self = this;

/* Board Setup */
function createBoard(grid) {
    var boardContainer = document.createElement("div");
    boardContainer.setAttribute("class", "container");
    grid.appendChild(boardContainer);
    for (var i = 0; i < 3; i++) {
        var row = document.createElement("div");
        row.setAttribute("class", "row mx-4");
        for (var j = 0; j < 3; j++) {
            var col = document.createElement("div");
            col.setAttribute("class", "col-4 border");
            row.appendChild(col);
            var test = document.createElement("p");
            test.setAttribute("class", "text-center");
            test.textContent = "X";
            col.appendChild(test)
        }
        boardContainer.appendChild(row);
    }

}

/* Page Setup */
function pageLayout() {
    app.setAttribute("class", "container");
    for (var i = 0; i< 5; i++) {
        var div = document.createElement("div");
        div.setAttribute("class", "row");
        if (i == 0) {
            var title = document.createElement("h1");
            title.setAttribute("class","display-4 mx-auto");
            title.textContent = "Tic Tac Toe";
            div.appendChild(title);
        } else if (i == 1) {
            createBoard(div);
        }
        app.appendChild(div);
    }
}
