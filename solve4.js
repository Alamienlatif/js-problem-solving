var findingBadData = [2, -5, -7, -13];

for(var i = 0; i < findingBadData.length; i++){
    var number = findingBadData[i];
    if(number > -2){
        continue;
    }
    console.log(number)
}