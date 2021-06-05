let reg=/Amit/; //This is regular expression
reg=/Amit/g;  //g means globle 
reg=/Amit/i; //i means case insensitive
console.log(reg);
console.log(reg.source);

let s="This is great Experience with Amit and Amit is nic guy";
//Function to match expressions 
//1. exec()-> This function will return an array for match or null for no match

let result= reg.exec(s);
console.log(result);

result= reg.exec(s);
console.log(result);

result= reg.exec(s);
if(result){
console.log(result);
console.log(result.input);
console.log(result.index); 
}
//2. test() ->return true or false
let result2 = reg.test(s);
console.log(result2);  //--> This will only print true if the "reg" is there string "a"

//3. match()-> It will return an array of results or null