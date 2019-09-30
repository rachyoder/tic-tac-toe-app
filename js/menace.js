/* Global Variables */
var states = { "0,0,0,0,0,0,0,0,0": [0, 0, 0, 0, 0, 0, 0, 0, 0] };

var possibleOut = 1, count = 0, symCheck = 1;
for (var i = 0; i < possibleOut; i++) {
    for (var j = 0; j, arr.length; j++) {
        if (arr[j] == 0) {
            count++;
            if (symCheck % 2 != 0) { //need to modify the string at the 
                //arr.splice(j, 1, 1);
                symCheck++;
            } else {
                //arr.splice(j, 1, 2);
                symCheck++;
            }
            stateKey = arr.join();
            if (!(stateKey in states)) {
                states[stateKey] = arr;
            }
        }

    }
    possibleOut += count;
    symCheck = 1;
}

function createArr() {
    var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    var xCount = 0, oCount = 0, totalCount = 1;

}


/* Create all possible states */
// var i = 0;
// while (i < 305) {
//     var stateObj;
//     var stateKey = stateObj.join();
//     if (!(stateKey in states)) {
        // states[stateKey] = stateObj;
//         i++;
//     }
// }
// console.log(states);
// console.log(Object.keys(states));