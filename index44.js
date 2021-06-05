//pretends this is coming from a server as response 
let a="Amit bhai";
a=undefined;
if(a!=undefined){
    throw new Error('This is not undefined');
}
else{
    console.log('This is undefiend');
}

try{
    console.log('We are inside try block');
}
catch(error){
    console.log('Are you okay');
}