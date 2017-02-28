'use strict';

let input = [90, 80, 30, 20, 18, 15, 13, 12, 1];
let arrayLength = input.length - 1;
let lastSwapIndex = 1;

while (arrayLength > 1) {

  for (let i = 0; i < arrayLength; i++) {
    let targets = [input[i], input[i + 1]];

    if (targets[0] > targets[1]) {
      input[i + 1] = targets[0];
      input[i] = targets[1];
      lastSwapIndex = i;
    }
  }  
  arrayLength = lastSwapIndex + 1;
}

console.log('Output', input);