/* Global variables */
let STATES = { "[0,0,0,0,0,0,0,0,0]": { "new_arr": [0, 0, 0, 0, 0, 0, 0, 0, 0], "beads": [4, 4, 4, 4, 4, 4, 4, 4, 4], "BEAD_COUNT": 4 } };
let KEY_STATES = Object.keys(STATES);

let POSSIBLE_OUT = 1, SYMBOL = 1, COUNT = 0;
let BEAD_COUNT = 4, X_TURN = 1;

let ROTATE = [2, 5, 8, 1, 4, 7, 0, 3, 6]; // 90 degree


/* ROTATION OF STATE */

function rotation(state) {
    for (let l = 0; l < 3; l++) {
        let rotate_state = [];
        for (let m = 0; m < ROTATE.length; m++) {
            rotate_state[m] = state[ROTATE[m]];
        }
        let rotate_state_key = `[${rotate_state}]`;
        if (rotate_state_key in STATES) {
            return false;
        }
    }
    return true;
}

/* CHECK FOR WIN */

function winChecker(state) {
    if (winCheck(state) == 1 || winCheck(state) == 2) {
        return false;
    } else {
        return true;
    }
}

/* STATE GENERATION */

//Loop through all items in Object State
for (let i = 0; i < POSSIBLE_OUT; i++) {
    let arr = JSON.parse(KEY_STATES[i]);

    //Loop through array pulled from Object
    for (let j = 0; j < arr.length; j++) {
        let new_arr = JSON.parse(JSON.stringify(arr));
        //If current array position is 0
        if (arr[j] == 0) {
            new_arr[j] = SYMBOL;
            let bead_arr = JSON.parse(JSON.stringify(new_arr));
            for (let k = 0; k < bead_arr.length; k++) {
                if (bead_arr[k] == 0) {
                    bead_arr[k] = BEAD_COUNT;
                } else if (bead_arr[k] == 1) {
                    bead_arr[k] = "X";
                } else if (bead_arr[k] == 2) {
                    bead_arr[k] = "O";
                }
            }
            let state_key = "[" + new_arr.join() + "]";

            //If current state is not in object, add it and increase count
            if (winChecker(new_arr)) {
                if (!(state_key in STATES) && rotation(new_arr)) {
                    KEY_STATES.push(state_key);
                    STATES[state_key] = { new_arr, "beads": bead_arr, "BEAD_COUNT": BEAD_COUNT };
                    COUNT++;
                }
            }
        }
    }

    //Increase Outer loop exit condition
    if (i == (POSSIBLE_OUT - 1)) {
        POSSIBLE_OUT += COUNT;
        COUNT = 0;
        if (SYMBOL == 1) {
            SYMBOL = 2; //O
        } else {
            SYMBOL = 1;
            X_TURN += 2; //X
            BEAD_COUNT--;
        }
    }
}

/* RANDOM BEAD SELECTION */
function randomBeadSelector(bead_state) {
    let max = 0;
    let total = 0
    for (let x = 0; x < bead_state.length; x++) {
        max += bead_state[x];
    }
    let bead_num = Math.floor((Math.random() * Math.floor(max)) + 1);
    for (let y = 0; y < bead_state.length; y++) {
        total += bead_state[y];
        if (total >= bead_num) {
            return y;
        }
    }
}

function menaceMode() {
    let idx = randomBeadSelector(STATES["[0,0,0,0,0,0,0,0,0]"]["beads"]);
    console.log({ idx });
    document.getElementById(idx).click();

}