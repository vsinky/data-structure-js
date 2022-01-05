var counter = 0;
var birthYear = new Map();
while (counter < 50) {
    let year = Math.floor((Math.random() * 10) % 100);
    let month = (Math.floor(Math.random() * 10) % 12) + 1;
    if (year > 91 || year <= 93) {
        counter++;
        console.log(month);
        if (month >= 1 && month <= 12) {
            birthYear.set(counter, month);
        }
    }
}

var one = 0,
    two = 0,
    three = 0,
    four = 0,
    five = 0,
    six = 0,
    seven = 0,
    eight = 0,
    nine = 0,
    ten = 0,
    eleven = 0,
    twelve = 0;
for (i = 0; i <= birthYear.size; i++) {
    console.log(birthYear.get(i));
    switch (birthYear.get(i)) {
        case 1:
            one++;
            break;
        case 2:
            two++;
            break;
        case 3:
            three++;
            break;
        case 4:
            four++;
            break;
        case 5:
            five++;
            break;
        case 6:
            six++;
            break;
        case 7:
            seven++;
            break;
        case 8:
            eight++;
            break;
        case 9:
            nine++;
            break;
        case 10:
            ten++;
            break;
        case 11:
            eleven++;
            break;
        case 12:
            twelve++;
            break;
        default:
            console.log("invalid input");
    }
}
console.log("the birth month is repeated are ");
console.log("One " + one + " two " + two + " thre " + three + " four " + four + " five " + five + " six " + six +
    " seven " + seven + " eight " + eight + " nine " + nine + " ten " + ten + " eleven " + eleven +
    " twelve " + twelve);