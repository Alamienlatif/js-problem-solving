function isEven(number){
    const remainder = number % 2;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }

}
const myNumberIsEven = isEven(303);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(1280);
console.log(herNumberIsEven);

function isLeapYear (year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

