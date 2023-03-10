// // multiply,addition,division,subtraction,value.
// mindGame = 3;
// // *=
// mindGame *= 4;
// console.log(mindGame);

// // +=
// mindGame +=10;
// console.log(mindGame);

// // /=
// mindGame /=2;
// console.log(mindGame);

// // -=
// mindGame -=5;
// console.log(mindGame);



function mindGame(points, quantity, gameAdd, gameDivition){
    const total = (points * quantity + gameAdd)/ gameDivition;
    const average = total - 5;
    return average;
}

const pointsGame = 5;
const quantityGame = 3;
const gameAddGame = 10;
const gameDivition = 2;

const myAverage = mindGame(pointsGame, quantityGame, gameAddGame, gameDivition)
console.log(myAverage);