const regex= /Amit/;
const str="Amit bhai";

let result= regex.exec(str);
 console.log("The result from exec is ", result);

 if(regex.exec(str)){
     console.log(`The string ${str} matches the expression ${regex.source}`);
 }
 else{
    console.log(`The string ${str} does not matches the expression ${regex.source}`);
 }