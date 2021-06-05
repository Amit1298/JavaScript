var name="Amit";
name="Krishna";
marks= 34;
city ="Agra";
console.log(name,marks,city);

const cCity="Delhi";
// cCity="Bihar";       Uncaught TypeError: Assignment to constant variable.
// at index3.js:8
console.log(cCity);

let lName="vishal";
console.log(lName);
{
    lName="Nitin";
    console.log(lName)
}
console.log(lName);

const arr1 =[2,43,6,5,3,6,87]
arr1.push(45,65,12)
console.log(arr1)