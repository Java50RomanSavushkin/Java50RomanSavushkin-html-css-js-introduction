//number
// let num = 25.325;
// num = 40.3;
// num = Math.floor(num);
// num = Math.trunc(num);
// num = Math.ceil(num);
// num = Math.round(num);
// num **= 2; // num = num ** 2

//strings

// let str = "a'bc'd";
// let str1 = 'a"bc"d';
// let res = "123" + 56;
// let res1 = "123" - 56;
// let res2 = Math.round("123" / 56);
// let res3 = "123" / "2";
// let res4 = "ab" / 8;

//boolean
// let a;
// let error = true;
// let res = true + true;
// let res1 = true && false;
// let res2 = -123 && 256;
// let message = error && "some error happenning";
// let res3 = a || 10;
// let res4 = "123" > "9";
// let res5 = "123" > 9;
// HW #11
// function getDigitsSum(number) {
//     //computes sum of all digits in the number
//     //number may be either negative or positive or 0
// }


// function getDigitsSum(number) {
//     let sum = 0;
//     while (number != 0) {
//         let rem = number % 10;
//         number = Math.floor(number / 10);
//         sum = sum + rem;
//     }
//     return sum;
// }
// console.log(getDigitsSum(122))


// function computeExpression(expressionString) {
//example of expression "9000 / ((10+20) ** 2)"
//returns 10
//task for searching in Internet
//only one line code
//how to use Internet for finding required code
// }
//console.log (computeExpression ("9000 / ( (10 + 20) ** 2)")) ; //prints 10
//console.log (computeExpression("9 + 100 / 2")); //prints 59

// function printAnanas() {

//To use only "A" "S"
//print "ananas"
// }

function revers(number) {
    if (number < 0) {
        number = -number
    }
    //returns string with digits of given number in reversed order
    //number may be either positive or negative
    //consider only integer part fractional
    //example reverse(1234) should return "43231"
    //example reverse (-1234) should return "-4321"
}
console.log(revers(-123))

// let n = 10;
// let count = 0;
// while (n >= 0) {
//     n--
//     count++;
// }

//equilty operators
// let res10 = "123" == 123; //true
// let res11 = "123" === 123; //false

//string function for HW
// const str = "aBcdTYg";
// str = str.toLowerCase(); //"abcdtyg"

