function mindGame(number){
    let numberMultiplication = number * 3;
    let numberAdd = numberMultiplication + 10;
    let numberDivide = numberAdd / 2;
    let numberSubtraction = numberDivide - 5;
    return numberSubtraction;
}
//Description: This  function operator performs some operation on single data value and produces a result.

function evenOdd(string){
    if(String.length % 2 ===0){
        return "even"
    }
    else{
        return "odd"
    }
}
//Discription: This program checks whether length in string variable is an even or an odd number.

function isLGSeven(input){
    if(input < 7){
        return input - 7
    }
    else{return input * 2}
}
result = isLGSeven(6)
//Description: Use the if else condition and find seven to a large number.

function findingBadData(array){
    if(Array.isArray(array)== false){
        return "Provide valid numbaric Array";
    }
    let myArray = array;
    let badData = 0;
    for(let i = 0; i < myArray.length; i++){
        const element = myArray[i];
        if(element < 0){
            badData++;
        }
    }
    return badData;
}
//Descrition: Find a negative number in an array.

function gemsToDiamond(num1, num2, num3){
    const friendOneGem = num1 * 21;
    const friendTwoGem = num2 * 32;
    const friendTreeGem = num3 * 43;
    const totalDiamond = friendOneGem + friendTwoGem + friendTreeGem;
    let sum = 0;

    if(typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number'){
        return "Provide valid Number";
    }
    else if(totalDiamond >= 2000){
        sum = totalDiamond - 2000;
        return sum;
    }
    else{
        return totalDiamond;
    }
 }
 //Description: convert gems ot diamonds and all total number values.