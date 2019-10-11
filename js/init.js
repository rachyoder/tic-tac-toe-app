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
            table_main.setAttribute("class", "table table-borderless ");
            let table_head = document.createElement("thead");
            
            let table_row_head = document.createElement("tr");
            for (let j = 0; j < 3; j++) {
                if (j == 0) {
                    let table_head_input = document.createElement("th");
                    table_head_input.setAttribute("class", "text-center manjariFont");
                    table_head_input.innerHTML = "MENACE WINS";
                    table_row_head.appendChild(table_head_input);
                } else if (j == 1) {
                    let table_head_input = document.createElement("th");
                    table_head_input.setAttribute("class", "text-center manjariFont");
                    table_head_input.innerHTML = "MENACE TIES";
                    table_row_head.appendChild(table_head_input);
                } else if (j == 2) {
                    let table_head_input = document.createElement("th");
                    table_head_input.setAttribute("class", "text-center manjariFont");
                    table_head_input.innerHTML = "MENACE LOSSES";
                    table_row_head.appendChild(table_head_input);
                }
                table_head.appendChild(table_row_head);
            }
            table_main.appendChild(table_head);
            let table_body = document.createElement("tbody");
            
            let table_row = document.createElement("tr");
            for (let k = 0; k < 3; k++) {
                if (k == 0 ) {
                    let table_item = document.createElement("td");
                    table_item.setAttribute("class", "text-center");
                    table_item.innerHTML = TOTAL_WIN;
                    table_row.appendChild(table_item);
                } else if (k == 1) {
                    let table_item = document.createElement("td");
                    table_item.setAttribute("class", "text-center");
                    table_item.innerHTML = TOTAL_TIE;
                    table_row.appendChild(table_item);
                } else if (k == 2) {
                    let table_item = document.createElement("td");
                    table_item.setAttribute("class", "text-center");
                    table_item.innerHTML = TOTAL_LOSS;
                    table_row.appendChild(table_item);
                }
                table_body.appendChild(table_row);
            }
            table_main.appendChild(table_body);
            div.appendChild(table_main);
        }
        app.appendChild(div);
    }
    if (MENACE_ACTIVE) {
        document.getElementById("toggleMenace").setAttribute("checked", "true");
        menaceMode();
    }
}