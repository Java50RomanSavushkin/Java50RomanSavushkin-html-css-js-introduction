// HW #11

//1
function getDigitsSum(number) {
    let sum = 0;
    if (number < 0) {
        number = -number
    }
    while (number != 0) {
        let rem = Math.floor(number % 10);
        number = Math.floor(number / 10);
        sum = sum + rem;
    }
    return sum;
}
console.log("Digits sum: " + getDigitsSum(123.45));
console.log("Digits sum: " + getDigitsSum(-280.123));
console.log("Digits sum: " + getDigitsSum(123));

//2
function computeExpression(expressionString) {
    return eval(expressionString);

}
console.log("Expression = " + (9000 / ((10 + 20) ** 2)))
console.log("Expression = " + (9 + 100 / 2))

//3
function printAnanas() {
    console.log(("A" + +"S" + "A" + "S").toLowerCase())
}
printAnanas()

//4
function reverse(num) {
    let res = '';
    if (num < 0) {
        res = '-';
        num = -num;
    }
    num = Math.floor(num);
    while (num) {
        res = res + (num % 10)
        num = Math.floor(num / 10);
    }
    return res;
}
console.log("Revers: " + (reverse(-280.123)))
console.log("Revers: " + (reverse(123)))
console.log("Revers: " + (reverse(-123)))
console.log("Revers: " + (reverse(123.45)))

