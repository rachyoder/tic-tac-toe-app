/* Page Setup */
var app = document.getElementById("app");

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
            
            // Create Reset Button
            var resetBtn = document.createElement("button");
            resetBtn.setAttribute("class", "btn btn-dark mx-auto");
            resetBtn.setAttribute("id", "resetBtn");
            resetBtn.innerHTML = "RESET GAME";
            resetBtn.addEventListener("click", gameReset);
            div.appendChild(resetBtn);

            // Create Menace Toggle
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
            menaceToggleLabel.innerHTML = "MENACE MODE";

            menaceToggleDiv.appendChild(menaceToggleInput);
            menaceToggleDiv.appendChild(menaceToggleLabel);
            div.appendChild(menaceToggleDiv);
        } else if (i == 4) {
            //Create Table for Win Check
            let table_main = document.createElement("table");
            let table_head = document.createElement("thead");
        }
        app.appendChild(div);
    }
}