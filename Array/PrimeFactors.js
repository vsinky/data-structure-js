const prompt = require('prompt-sync')();

var numbers = new Array();
const primefactorLimit = prompt('enter the number to do primefactorization :-');
console.log("number :" + primefactorLimit);
let counter = 0;
for (let i = 2; i <= primefactorLimit; i++) {
    if (primefactorLimit % i == 0) {
        console.log(i);
        isPrime = 1;
        for (j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                isPrime = 0;
                break;
            }
        }
        if (isPrime == 1) {
            numbers[counter] = i;
            counter++;
        }
    }
}
console.log("primefactor ", ...numbers);