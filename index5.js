let myVar;
myVar= String(34);
console.log(myVar, typeof myVar);

let boolenVar= String(true);
console.log(boolenVar, typeof boolenVar);

let date= String(new Date());
console.log(date, typeof date);

let arr =String([4,3,4,23,65,8]);
console.log(arr, typeof arr, arr.length);

let i =45;
i= true;
console.log(i.toString());

let str= Number("3456");
str= Number("5366f");
str= Number(true);
console.log(str, typeof str);

let number = parseFloat("34.6547");
console.log(number.toFixed(2), typeof number);

let myStr="453";    
 // when the two numbers are added it will added but in case one is number and another is string it will be concatination
let myNum=67;
console.log(myStr+myNum)