var numbers = new Array(10);

for (let i = 0; i <= 9; i++) {
    let randomeValue = Math.floor(Math.random() * 1000);
    numbers[i] = randomeValue;
    console.log(numbers[i]);
}
var temp = 0;
for (j = 0; j < numbers.length - 1; j++) {
    for (i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] > numbers[j]) {
            temp = numbers[j];
            numbers[j] = numbers[i];
            numbers[i] = temp;
        }
    }
}
console.log("smin " + numbers[0] + " smax " + numbers[numbers.length - 2]);