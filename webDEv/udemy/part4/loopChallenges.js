


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



let N = [1,2,3,4,5];
let smallnumber = [];

for (const i of N) {
    if(i == 4){
        break
    }
    smallnumber.push(i);
    
}
console.log(smallnumber);
