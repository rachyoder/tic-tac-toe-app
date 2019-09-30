var states = {};
var rotate = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8],
    [2, 5, 8, 1, 4, 7, 0, 3, 6],
    [8, 7, 6, 5, 4, 3, 2, 1, 0],
    [6, 3, 0, 7, 4, 1, 8, 5, 2],
    [2, 1, 0, 5, 4, 3, 8, 7, 6],
    [6, 7, 8, 3, 4, 5, 0, 1, 2]
];

function randomSym() {
    return Math.floor(Math.random() * Math.floor(3));
}

/* Create all possible states */
var i = 0;
while (i < 305) {
    var stateObj = [
        randomSym(), randomSym(), randomSym(),
        randomSym(), randomSym(), randomSym(),
        randomSym(), randomSym(), randomSym()
    ];
    var stateKey = stateObj.join();
    if (!(stateKey in states)) {
        states[stateKey] = stateObj;
    }
    i++;
}
console.log(states);
function rotation(state) {

}