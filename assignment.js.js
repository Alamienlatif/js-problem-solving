// 1
function mindGame(number){
 let numberMultiplication = number * 3;
 let numberAdd = numberMultiplication  + 10;
 let numberDivide = numberAdd / 2;
 let numberSubtraction = numberDivide - 5;
 return numberSubtraction;

}
console.log(mindGame(5));

// 2

function evenOdd(number){
    const remainder = number % 2;
    if(remainder === 0 ){
        return 'even';
    }
    else{
        return 'Odd';
    }
}

const myNumberevenOdd = evenOdd(303);
console.log(myNumberevenOdd);
const herNumberevenOdd = evenOdd(1280);
console.log(herNumberevenOdd);

// 3
function isLGSeven(x, y){
    isLGSeven = x - 7;
    return x -7;
}

let firstnumber = 9;
let secondnumber = 7;

let alip = isLGSeven(firstnumber,secondnumber)
console.log(alip);

// 4

var findingBadData = [2, -5, -7, -13];

for(var i = 0; i < findingBadData.length; i++){
    var number = findingBadData[i];
    if(number > -2){
        continue;
    }
    console.log(number)
}

// 5      23.5
function  gemsToDiamond(gems21, gems32, gems43){
    const sum = gems21 + gems32 + gems43;
    return sum; 
}

const gems21Point = 21 * 50;
const gems32Point = 32 * 5;
const gems43Point = 43 * 2;
var myPoint = gemsToDiamond(gems21Point, gems32Point, gems43Point);
console.log(gemsToDiamond);
