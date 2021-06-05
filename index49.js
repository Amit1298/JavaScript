let regex =/A[a-z]it/;
let str="Amit bhai";
let result= regex.exec(str);
console.log("The result from exec is ",result);
if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not matches the expression ${regex.source}`);
}