function kmToMiles(Rm){
    const result = Rm * 0.62;
    return result;
}
var miles = kmToMiles(15);
// console.log(miles);



function workout(workoutName) {
    var chestWorkout = ["cable cros","bicep","bicep"]
    var chestWorkout = ["chest","fly","chest press","chest"];

    if(workoutName == "chest") {
        return chestWorkout;
    } else if (workoutName == "bicep") {
        return bicepWorkout;
        
    }else {
        return "dont know";
    }

    }

var workoutPlan = workout("chest");
// console.log(workoutPlan);


var myDays = 25;

var first1To10Days = 500;
var second11To20Days = 300;
var third21ToAnyDays = 100;

if (myDays <= 10) {
    var totaCost = myDays * 500;
}

else if (myDays <= 20 && myDays > 10) {
    var first10daysCost = 10 *500;
    var remainingDays = myDays -10;
    var totalDaysCost = remainingDays *300;
    var total11To20Dadyscost = total = first10daysCost + totalDaysCost;
}
    else{
        var first10daysCost = 500 * 10;
        var second11To20Days = 300 * 10;
        var remainingDays = myDays - 20;
        var totalAbove20DaysCost =
        first1To10Days + second11To20Days + thirdinifinityDays;
    }
}