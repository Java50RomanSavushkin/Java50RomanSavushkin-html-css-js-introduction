function myToString(number, base) {
    base = base || 10;
    let negative = false;
    if (number < 0) {
        negative = true;
        number = -number;
    }
    let intPart = Math.trunc(number);
    let FracPart = number - intPart;
    let res = '';
    do {
        const digit = intPart % base;
        const symbol = getSymbol(digit);
        res = symbol + res;
        intPart = Math.trunc(intPart / base);
    }
    while (intPart);
    if (FracPart) {
        fixed = FracPart.toFixed(2);
        slice = fixed.slice(2);
        res = res + '.' + slice;
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
console.log(myToString(123.45))
console.log(myToString(123))
console.log(myToString(-123))

