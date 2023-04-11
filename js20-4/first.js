
// FuncitonKey > function  functionName > fName(parameters a, b){
        // return a + b;
// }

// const result = addNumbers(4, 7);




//  function getSumOfAnArray(numbers){
//     let sum = 0;
//     for(let i = 0; i < numbers. length; i ++){
//         const index = i;
//         const element = numbers[index];
//         sum = sum + element;
//     }
//     return sum;
// }

// function getOddNumbersOfAnArray(numbers){
//     const oddNumbers = [];
//     for(let i = 0; i < numbers. length; i++){
//         const index =  i;
//         const element = numbers[index];
//         if(element % 2 === 1){
//             console.log(index, element);
//             oddNumbers.push(element);
//             // console.log(index, element, sum);
//         }
        
//     }
//     return oddNumbers;
// }
 
// const myNumbers = [12, 65, 45, 78, 32, 45, 91];
// const oddNumbers = getOddNumbersOfAnArray(myNumbers);
// console.log(oddNumbers);
// const oddNumberSum = getSumOfAnArray(oddNumbers);

// console.log('odd number sum', oddNumberSum);


// function factorial(number){
//     let result = 1;
//     for(let i = 1; i <= number; i++){
//         result = result * i;
//     }
//     return result;
// }
// const number = 6;
// const result = factorial(6);
// console.log('number 6:-',result);

// function factorial(number){
//     let result = 1;
//     for(let i = 1; i <= number; i++){
//         result = result * i;
//     }
//     return result;
// }
// const number = 9;
// const fact = factorial(number);
// console.log('factorial of:', number, fact);

// function factorial(number){
//     let num = 1;
//     let result = 1;
//     while(num <= 7){
//         result = result * num;
//         num++;
//     }
//     return num;
// }
// const output = factorial(7);

// function factorial(number){
//     let i = number;
//     let result = 1;
//     while( i >= 1){
//         result = result * i;
//         i--;
//     }
//     return result;
// }

// const output = factorial(7);

// function getFactorial(number){
//     let factorial = 1;
//     for(let i = 1; i <= number; i++){
//         factorial = factorial * i;
//         console.log(i, factorial);
//     }
//     return factorial;
// }

// const factorial = getFactorial(12);
// console.log('factorial of 12 is:', fa/ctorial);

// function getFactorial(number){
//     let factorial = 1;
//     for(let i = 1; i <= number; i++){
//         factorial = factorial * i;
//         console.log(i,  factorial);
//     }
//     return factorial;
// }
// const factorial = getFactorial(12);
// console.log('factorial of 8 is:', factorial);

// function reversewords(str)
// const words = str.split('');
// const result = [];
// //['I', 'am', 'a', 'good', 'boy']
// for(let i = words.length -1; i>=0; i--){
//     const element = words[i];
//     result.push(element);
// }
// const reversed = result.join(' ');
// return reversed;
// // console.log(result);

// const MyString = 'I am a good boy';
// reversewords(myString);

            //  22.8-9
// const fibo = [0, 1];
// for(let i = 2; i<= 15; i++){
//     fibo[i] = fibo[i-1] + fibo[i-2];
// }
// console.log(fibo);

// function maxInArray(numbers){
//     let largest = numbers[0];
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         if(element > largest){
//             largest = element;
//         }
//     }
//     return largest;
// }

// const heights = [167, 190, 120, 165, 137, 274];
// const tallest = maxInArray(heights);
// console.log('tallest person is:', tallest);

          //? 23.1 Array,String,Boolean,Object,Function,number

// const country = 'Bangladesh';
// const age = 52;
// const isIndependent = true;
// const student = {id: 1211, class: 11, name: 'Anis'};
// const friends = [13, 14, 15, 16, 7, 15, 30];
// function add(num1 , num2){
//     return num1 + num2;
// }
// console.log(typeof country);
// console.log(typeof age);
// console.log(typeof isIndependent);
// console.log(typeof student);

// // check array using Array.isArray
// console.log(Array.isArray(friends));
// console.log(typeof add);

// console.log(friends.includes(15));
// console.log(friends.includes(43));

// if(friends.indexOf(234) !== -1 ){

// }

// //  concat :
// const newFriendsAge = [12, 14, 16, 33]
// const allFriends = newFriendsAge.concat(friends);
// console.log(allFriends);

        // 23:3
// const names = ['abul','bubli','cabab','daliya','jhir','alli','kbir','bablu','bablu','abul',
// 'hanip','kbir', 'doll'];

// function removeDuplicate(names){
//     const unique = [];
//     for(let i = 0; i< names.length; i++){
//         const name = names[i];
//         if(uniqueNames.includes(name) === false){
//             unique.push(name);
//         }
//     }
//     return unique;
// }
// const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);

// //    23.3
// const names = ['abul','abuld','adbul','abful','abgul','abgul','absul','aebul','agbul','afbul','abuul',];

// function removeDuplicate(names){
//     const unique = [];
//     for(let i = 0; i< names.length; i++){
//         const name = names[i];
//         if(uniqueNames.includes(name) === false){
//             unique.push(name);
//         }
//     }
//     return unique;
// }

// const uniqueNames = removeDuplicate(names)
// console.log(uniqueNames);

            // 23:4
// ***divisible.js
// *** 1.show output from: 1-50
// 2. if the number is divisible by 3 then instead of the number show 'foo'
// 3. if the number is divisible by 5 then instead of the number show 'bar'
// 4. if the  number is divisible by both 3 and 5 then instead of the number show 'foobar'

// for(let i = 1; i <= 50; i++){
//     if(i % 3 === 0){
//         console.log('foo');
//     }
//     else if (i % 5 === 0){
//         console.log('bar');
//     }
//         else if(i % 3 === 0 && i % 5 === 0){

//             console.log('foobar');
//         }
//         else{
//             console.log(i);

//       }
// }

// // 23:5

// function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
//     const perChairWood = 3;
//     const perTableWood = 10;
//     const perBedWood = 50;

//     const chairWood = chairQuantity * perChairWood;
//     const tableWood = tableQuantity * perTableWood;
//     const bedWood = bedQuantity * perBedWood;

//     const totalWood = chairWood + tableWood + bedWood;
//     return totalWood;

// }

// const totalWood = woodCalculator(1, 1, 1);
// console.log('total wood required:', totalWood);

// 23.6 objects rilative

// const phone = [
//     {phone:'Samsung', camera:12, storage: '32gb', price: 36000, color: 'silver'},
//     {phone:'Walton', camera:10, storage: '32gb', price: 32000, color: 'silver'},
//     {phone:'Samsung', camera:22, storage: '32gb', price: 46000, color: 'silver'},
//     {phone:'Samsung', camera:32, storage: '32gb', price: 56000, color: 'silver'},
//     {phone:'Samsung', camera:13, storage: '32gb', price: 34000, color: 'silver'},
//     {phone:'Samsung', camera:14, storage: '32gb', price: 36300, color: 'silver'},
//     {phone:'Samsung', camera:15, storage: '32gb', price: 36800, color: 'silver'},
// ];

// function cheapestPhone(phones){
//     let cheapest = phones[0];
//     for(let i = 0; i < phones.length; i++){
//         const phone = phones[i];
//         if(phone.price < cheapest.price){
//             cheapest = phone;
//         }
//     }
//     return cheapest;    
// }

// const mySelection = cheapestPhone(phones);
// console.log(mySelection);


// 23.7 quantity

// const shoppingCart = [
//     {name: 'shoe', price: 1200, quantity: 2 },
//     {name: 'shirt', price: 2200, quantity: 7 },
//     {name: 'pant', price: 4200, quantity: 5 },
//     {name: 'belt', price: 600, quantity: 3 },
// ];

// function totalCost(products){
//     let sum = 0;
//     for(let i = 0; i< products.length; i++){
//         const product = products[i];
//         const productTotal = product.price * product.quantity;
//         sum = sum + product.price;
//         // console.log(product);
//     }
//     return sum;
// }

// const expense = totalCost(shoppingCart);
// console.log('Total expense today:', expense);

// 23.8

// function ticketPrice(ticketQuantity){
//         const first100Rate = 100;
//         const second100Rate = 90;
//         const restTicketRate = 70;
//         if(ticketQuantity <= 100 ){
//                 const price = ticketQuantity * first100Rate;
//                 return price;
//         }
//         else if(ticketQuantity <= 200){
//                 const first100price = 100 * first100Rate;
//                 const restTicketQuantity = ticketQuantity - 100;
//                 const restTicketPrice = restTicketQuantity * second100Rate;
//                 const totalPrice = first100Price + restTicketPrice;
//                 return totalPrice;
//         }
//         else{
//                 const first100Price = 100 * first100Rate;
//                 const second100Price = 100 * second100Rate;
//                 const restTicketQuantity = ticketQuantity - 200;
//                 const restTicketPrice = restTicketQuantity * restTicketRate;
//                 const totalCost = first100Price + second100Price + restTicketPrice;
//                 return totalCost;

//         }

// }

// const price = ticketPrice(120);
// console.log('price: ', price);

// 23.9 validution.js

// function add(num1, num2){
//         if(typeof num1 !== 'number' || typeof num2 !== 'number'){
//                 return 'Please enter a number';
//         }
//         return num1 + num2
// }

// const result = add(12, 45);
// console.log(result);

// function multiply(num1, num2){    
//         console.log(num1, num2);
//         return num1 * num2;
// }

// const output = multiply(12,45);
// console.log(output)


// 23.10
