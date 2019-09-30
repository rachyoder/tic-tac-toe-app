/* Global Variables */
var states = { "0,0,0,0,0,0,0,0,0": [0, 0, 0, 0, 0, 0, 0, 0, 0] };

var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var possibleOut = 1, count = 0, symCheck = 1;
for (var i = 0; i < possibleOut; i++) {
    for (var j = 0; j, arr.length; j++) {
        if (arr[j] == 0) {
            count++;
        }
        if (symCheck % 2 != 0) {
            arr.splice(j,1,1);
            symCheck++;
        } else {
            arr.splice(j,1,2);
            symCheck++;
        }
    }
    possibleOut += count;
}


// var rotate = [
//     [0, 1, 2, 3, 4, 5, 6, 7, 8],
//     [2, 5, 8, 1, 4, 7, 0, 3, 6],
//     [8, 7, 6, 5, 4, 3, 2, 1, 0],
//     [6, 3, 0, 7, 4, 1, 8, 5, 2],
//     [2, 1, 0, 5, 4, 3, 8, 7, 6],
//     [6, 7, 8, 3, 4, 5, 0, 1, 2]
// ];

// function createArr() {
//     var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
//     var xCount = 0, oCount = 0, totalCount = 1;

// }


/* Create all possible states */
// var i = 0;
// while (i < 305) {
//     var stateObj;
//     var stateKey = stateObj.join();
//     if (!(stateKey in states)) {
//         states[stateKey] = stateObj;
//         i++;
//     }
// }
// console.log(states);
// console.log(Object.keys(states));