/* Global Variables */
var states = { "[0,0,0]": [0, 0, 0] };
var keyStates = Object.keys(states);
var overarchCount = 1, temp = 0;
var savePos = 1;

var possibleOut = 1, symCount = 1;
for (var i = 0; i < possibleOut; i++) {
    var count = 0;
    temp++;
    //console.log({ keyStates });
    //console.log(keyStates[i]);
    var arr = JSON.parse(keyStates[i]);
    //console.log({ arr });
    for (var j = 0; j < arr.length; j++) {
        var newArr = JSON.parse(JSON.stringify(arr));
        //console.log({ "arr[j]": arr[j] });
        if (arr[j] == 0) {
            //console.log({ newArr, symCount });
            newArr[j] = symCount;
            //console.log({ newArr });

            var stateKey = "[" + newArr.join() + "]";
            if (stateKey == "[2,1,2]") {
                console.log({ states, keyStates, stateKey, count, symCount, possibleOut, newArr, arr, i, j })
            }
            if (!(stateKey in states)) {
                keyStates.push(stateKey);
                states[stateKey] = newArr;
                count++;
            }
        }
    }
    possibleOut += count;
    //console.log({ possibleOut });
    if (i == (possibleOut - 1)) {
        if (temp == overarchCount) {
            savePos = possibleOut;

            overarchCount = possibleOut - savePos;
            temp = 0;
            if (symCount == 1) {
                symCount = 2;
            } else {
                symCount = 1;
            }
        }
    }
    //console.log({ states, keyStates });
}
