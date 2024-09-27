


// let sum = 0;
// let i  = 5;

// let countdown = [];

// while (i >0 ) {
//     countdown.push(i);
//     i--
// }
// console.log(countdown);

// let i = 1;
// let sum = 0;
// let total


// do{
//     sum += i;
//     i++;
    
// }while(i<=3)

// console.log(sum);


// let multipliedNumbers = [];
// let array = [2, 4, 6];
// for (let i = 0; i < array.length; i++) {
//     const element = array[i]*2;
//     multipliedNumbers.unshift(element);
    
// }
// console.log(multipliedNumbers);

// let selectedtea = [];

// let tea = ["gtea", "btea","chai", "otea" ];
// for (let i = 0; i < tea.length; i++) {
//     if (tea[i] === "chai") {
//         break;
//     }
//     const element = tea[i];
//     selectedtea.push(element);

    
// }
// console.log(selectedtea);


// for-of loop
// let N = [1,2,3,4,5];
// let smallnumber = [];

// for (const i of N) {
//     if(i == 4){
//         break
//     }
//     smallnumber.push(i);
    
// }
// console.log(smallnumber);


/// for-in loop 


// let citiesPopulation = {
//     london: 89000,
//     "New york": 8390000,
//     Paris: 2220000,
//     Berlin: 350000
// };

// let cityPopulation = {}

// for (const city in citiesPopulation) {

//     // key = value 
//     if (citiesPopulation[city] < 3000000){
//         continue;
//     }

//     cityPopulation[city] = citiesPopulation[city];
    
// }
// console.log(cityPopulation);




///+++++ for each loop
let availableTea = [];

let Tea = ["gtea", "btea","chai", "otea" ];

Tea.forEach((tea) => {
    if ( tea === "chai") {
        return;
    }
    availableTea.push(tea)
});

console.log(availableTea);
