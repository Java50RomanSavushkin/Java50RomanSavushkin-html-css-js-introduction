//task sort.1
function evenOddSort(array) {
    return array.sort((e1, e2) => {
        return e1 % 2 === 0 && e2 % 2 !== 0 ? -1 : 0;
    });
}
console.log(evenOddSort([20, -10, 333, 1000, 552, 7, -7]));


//task sort.2
function oddEvenSort(array) {
    return array.sort((e1, e2) => {
        return e1 % 2 !== 0 && e2 % 2 === 0 ? -1 : 0;
    });
}
console.log(oddEvenSort([20, -10, 333, 1000, 552, 7, -7]));


//task sort.3
function evenAscOddDesc(array) {
    return array.sort((e1, e2) => {
        return e1 % 2 === 0 && e2 % 2 === 0 ? e1 - e2 :
            e1 % 2 !== 0 && e2 % 2 !== 0 ? e2 - e1 :
                e1 % 2 === 0 ? -1 : 0;
    });
};
console.log(evenAscOddDesc([20, -10, 333, 1000, 552, 7, -7]));


//task reduce.1
function getMin(array) {
    return array.reduce((acc, cur) => {
        return Math.min(acc, cur);
    });
}
console.log(getMin([20, -10, 333, 1000, 552, 7, -7]));


//task reduce.2
function getMax(array) {
    return array.reduce((acc, cur) => {
        return Math.max(acc, cur);
    });
}
console.log(getMax([20, -10, 333, 1000, 552, 7, -7]));


//task reduce.3
function getAverage(array) {
    return array.reduce((acc, cur) => {
        return (acc + cur);
    }) / array.length;
}
console.log(getAverage([20, -10, 333, 1000, 552, 7, -7]));


//task reduce.4
