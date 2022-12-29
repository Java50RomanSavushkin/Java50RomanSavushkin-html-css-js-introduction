//1
let array = []
for (let i = 0; i < 5; i++) {
    array.push(getRandomNumber(0, 1))
}

function getHtmlUl(array) {
    let html = '<ul class="list class">';
    for (let i = 0; i < array.length; i++) {
        let blackOrWhite = array[i] === 0 ? "white" : "black";
        html += `<li class="item class"><div class="${blackOrWhite}"></div></li>`;
    }
    html += '</ul>';
    return html;
}

function getRandomNumber(min, max) {
    min = Math.trunc(min);
    max = Math.trunc(max);
    return min + Math.trunc(Math.random() * (max - min + 1));
}
console.log(getHtmlUl(array));

//--------------------------------------------------------------

//2
//A part of the code was found on the internet
function transpMatrix(matrix) {
    const transp = [];
    for (let col = 0; col < matrix[0].length; col++) {
        const transpRow = [];
        for (let row = 0; row < matrix.length; row++) {
            transpRow[row] = matrix[row][col];
        }
        transp[col] = transpRow;
    }
    return transp;
}
console.log(transpMatrix([[1, 2], [3, 4], [4, 5]]));