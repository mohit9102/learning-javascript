


function createTeaMaker(){
     
    return function (teaType){
        return `Making ${teaType}`
    };
}

const teaMaker = createTeaMaker();
const result = teaMaker('GREEN TEA')

console.log(result);







