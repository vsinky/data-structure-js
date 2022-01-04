const prompt = require('prompt-sync')();
let number1 = parseInt(prompt("1st number: "));
let number2 = parseInt(prompt("2nd number: "));
let number3 = parseInt(prompt("3rd number: "));
var numArray = [number1, number2, number3];
let sum = 0;
for (let i = 0; i < numArray.length; i++) {
    sum = sum + numArray[i];
}
if (sum == 0) {
    console.log(sum);
} else {
    console.log("sum is not 0");
}