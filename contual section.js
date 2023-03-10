// 2ta sogkha theke brow sogkha berkro.

// let nameOne = "Latif"
// let nameTwo = "Alamien"

// let friendOneLength = nameOne.length;
// let friendTwoLength = nameTwo.length;

// if(friendOneLength > friendTwoLength){
//     console.log(nameOne);
// }else{
//     console.log(nameTwo)
// }

//bro nam ta reverse kri .split("") (line gape) .reverse() (name ulta hbe) .join("") (name ulta jogk hbe) {ans:neimalA} 

// let nameOne = "Latif"
// let nameTwo = "Alamien"

// let friendOneLength = nameOne.length;
// let friendTwoLength = nameTwo.length;

// if(friendOneLength > friendTwoLength){
//     console.log(nameOne.split("").reverse().join(""));
// }else{
//     console.log(nameTwo.split("").reverse().join(""))
// }


let str = "Alamien";
let reversedString = "";
for(let i=str.length-1; i>=0; i--){
    const element = str[i];
    reversedString = reversedString+element;
}
console.log(reversedString)