const mapValue = new Map();
var one = 0,
    two = 0,
    three = 0,
    four = 0,
    five = 0,
    six = 0;
while (one < 10 && two < 10 && three < 10 && four < 10 && five < 10 && six < 10) {
    var diceValue = (Math.floor((Math.random() * 10) % 6) + 1)
    console.log(diceValue);
    var maxvalue = 0;
    mapValue.set(diceValue, diceValue);
    maxvalue = diceValue;
    switch (diceValue) {
        case 1:
            one++
            break;
        case 2:
            two++;
            break;
        case 3:
            three++;
            break;
        case 4:
            four++
            break;
        case 5:
            five++
            break;
        case 6:
            six++;
        default:
            console.log("opps dice got confuse");
    }

}
if (one < two && one < three && one < four && one < five && one < six) {
    console.log("the minimum ocurance is " + one);
} else if (two < one && two < three && two < four && two < five && two < six) {
    console.log("the minimum ocurance is " + two);
} else if (three < one && three < two && three < four && three < five && three < six) {
    console.log("the minimum ocurance is " + three);
} else if (four < one && four < two && four < three && four < five && four < six) {
    console.log("the minimum ocurance is " + four);
} else if (five < one && five < two && five < three && five < four && five < six) {
    console.log("the minimum ocurance is " + six);
} else {
    console.log("the minimum ocurance is " + six);
}
console.log("maximum times occurance " + maxvalue + " the map size is " + mapValue.size);