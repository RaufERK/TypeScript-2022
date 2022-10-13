"use strict";
function combine(input1, input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    else {
        return '' + input1 + input2;
    }
}
console.log(combine(1, 2));
console.log(combine('1', '2'));
console.log(combine('1', 2));
