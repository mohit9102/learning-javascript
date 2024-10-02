let computer = { cpu : 12};
let lenovo = {
   screen : "HD",
   __proto__: computer //that means i want to acsses the property 
   //present in computer object
  
  };
let tomHardware = {};


// console.log(computer);

// console.log(`computer` , computer.__proto__);///this is the most common way of accessing.
// So you want to access any prototype
// for any particular object or anything.

// console.log(`lenovo`, lenovo.__proto__);
// console.log(lenovo.cpu);//



////////////// ++++++++++ mordern of accesing the other object property
//////////////////// JavaScript uses prototype-based inheritance to allow objects to share behavior.


let genericCar = { tyres: 4}

let tesla = {
  driver : "AI"
}


Object.setPrototypeOf(tesla, genericCar)

// console.log(`tesla`, tesla.tyres );
console.log(`tesla`, Object.getPrototypeOf(tesla));
// Tesla always have access to its own property.
// But whatever the property you have injected, if
// you want to have an access of this,
// try to access them by get prototype off.











