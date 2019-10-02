/* Global Variables */
var states = { "[0,0,0,0,0,0,0,0,0]": [0, 0, 0, 0, 0, 0, 0, 0, 0] };
var keyStates = Object.keys(states);

var possibleOut = 1, symbol = 1, count = 0;
var beadCount = 4, xTurn = 1;

var rotate = [2,5,8,1,4,7,0,3,6]; // 90 degree

function rotation(state) {
    for (var k = 0; k < rotate.length; k++) {
        console.log (rotate[k]);
    }
}

/* STATE GENERATION */

//Loop through all items in Object State
for (var i = 0; i < possibleOut; i++) {
    var arr = JSON.parse(keyStates[i]);

    //Loop through array pulled from Object
    for (var j = 0; j < arr.length; j++) {
        var newArr = JSON.parse(JSON.stringify(arr));

        //If current array position is 0
        if (arr[j] == 0) {
            newArr[j] = symbol;
            console.log({newArr});
            var stateKey = "[" + newArr.join() + "]";

            //If current state is not in object, add it and increase count
            if (!(stateKey in states)) {
                keyStates.push(stateKey);
                states[stateKey] = newArr;
                count++;
            }
        }
    }
    //Increase Outer loop exit condition
    if (i == (possibleOut - 1)) {
        possibleOut += count;
        count = 0;
        if (symbol == 1) {
            symbol = 2; //O
        } else {
            symbol = 1;
            xTurn += 2 //X
        }
    }
}
