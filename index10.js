function greet(name,thanks='Thank you'){
   let meg=`Happy birthday ${name} function is a block of code and it is easy to write a way to decreace the line of code, ${thanks}`

   return meg;
}
let name="Amit kumar";
let name2="krishna";
let val=greet(name, 'Thanks a lot');
console.log(val);

const myObj = {
    name:'Krishna',
    game: function(){
        return 'GTA' ;
    }
}

console.log(myObj.game());

let arr= ['fruits','vegetable','furniture'];
arr.forEach(function(element,index,array){
    console.log(element,index,array)
})


let i=234;
console.log(i)
function ui(name){
    let i=9;
    console.log(i)
    return `This is ${name} ui`
}
console.log(ui('Amit'),i);