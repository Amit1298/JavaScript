let regex= /Amit/;
let str ="Amit is a Good boy and Amit is starts a Metacharacter";
let result =regex.exec(str);
console.log("The result from exec is ",result);
if (regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} doesnot matches the expression ${regex.source}`);
}