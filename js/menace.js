/* Global Variables */
var states = { "[0,0,0,0,0,0,0,0,0]": [0, 0, 0, 0, 0, 0, 0, 0, 0] };
var keyStates = Object.keys(states);
var overarchCount = 1, temp = 0;
var savePos = 1;
var count = 0;

var possibleOut = 1, symbol = 1;

//Loop through all items in Object State
for (var i = 0; i < possibleOut; i++) {
    temp++;
    var arr = JSON.parse(keyStates[i]);

    //Loop through array pulled from Object
    for (var j = 0; j < arr.length; j++) {
        var newArr = JSON.parse(JSON.stringify(arr));

        //If current array position is 0
        if (arr[j] == 0) {
            newArr[j] = symbol;
            var stateKey = "[" + newArr.join() + "]";

            if (stateKey == "[2,1,2]") {
                //console.log({ states, keyStates, stateKey, count, symbol, possibleOut, newArr, arr, i, j })
            }

            //If current state is not in object, add it and increase count
            if (!(stateKey in states)) {
                keyStates.push(stateKey);
                states[stateKey] = newArr;
                count++;
                //console.log({ count });
            }
        }
    }
    //Increase Outer loop exit condition
    if (i == (possibleOut - 1)) {
        possibleOut += count;
        count = 0;
        //console.log({ temp, overarchCount });
        if (symbol == 1) {
            symbol = 2;
        } else {
            symbol = 1;
        }
    }
    //     if (temp == overarchCount) {
    //         savePos = possibleOut;

    //         overarchCount = possibleOut - savePos;
    //         temp = 0;
    // }
    //console.log({ states, keyStates });
}
