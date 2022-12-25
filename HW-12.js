function myParseInt(str, base) {
    base = base || 10;
    let res = 0;
    if (getCode(str[0]) >= base) {
        return NaN;
    }
    let negative = false;
    let i = 0;
    if (str[0] === '-') {
        negative = true;
        i = 1;
    }
    for (i; i < str.length; i++) {
        if (str[i] === '.' || getCode(str[i]) >= base) {
            break;
        }
        res = res * base + getCode(str[i]);
    }
    if (negative) {
        return Math.trunc(-res);
    }
    else {
        return Math.trunc(res);
    }
}
function getCode(symbol) {
    symbol = symbol.toLowerCase();
    const codeA = 'a'.charCodeAt();
    const res = symbol <= '9' ? +symbol : symbol.charCodeAt() - codeA + 10;
    return res;
}
console.log(myParseInt("123.35"));
console.log(myParseInt("12a"));
console.log(myParseInt("-123"));
console.log(myParseInt("123m"));
console.log(myParseInt("m123"));
console.log(myParseInt("-ff", 16));

function myToString(number, base) {
    base = base || 10;
    negative = false;
    if (number < 0) {
        negative = true;
        number = -number;
    }
    number = number + '';
    numArr = number.split(".");
    intPart = Number(numArr[0]);
    FracPart = Number(numArr[1]);
    res = '';
    do {
        const digit = intPart % base;
        const symbol = getSymbol(digit);
        res = symbol + res;
        intPart = Math.trunc(intPart / base);
    }
    while (intPart);
    if (FracPart) {
        res = res + '.' + FracPart;
    }
    if (negative) {
        return '-' + res;
    }
    else {
        return res;
    }
}
function getSymbol(digit) {
    const codeA = 'a'.charCodeAt();
    let symbol;
    if (digit < 10) {
        symbol = "" + digit;
    } else {
        const codeAscii = digit - 10 + codeA;
        symbol = String.fromCharCode(codeAscii);
    }
    return symbol;
}
console.log(myToString(-123))
console.log(myToString(123.45))
console.log(myToString((123),16))
console.log(myToString(123))
console.log(myToString((123.45), 36))//incorrect return 




