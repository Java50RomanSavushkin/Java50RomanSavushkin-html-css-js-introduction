function myParseInt(str, base) {
    base = base || 10;
    let res = 0;
    let negative = false;
    let i = 0;
    if (str[0] === '-') {
        negative = true;
        i = 1;
    }
    for (i; i < str.length; i++) {
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
console.log((parseInt("-123m")));
// console.log((parseInt("-ffz",16)));
// console.log((parseInt("123.35")));
