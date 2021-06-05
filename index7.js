const marks= [3,65,43,65,34,89,56];
const fruits= ['orange', 'Apple', 'pineapple'];
const mixed= ['str', 45, 86, [6,45,34]];
const arr = new Array(23,65,76,57,'orange');
console.log(arr);
console.log(mixed);
console.log(fruits[1]);
console.log(arr.length);
console.log(Array.isArray('orange'));
arr[0]= 'Amit';
let arrelement = arr[0];
console.log('element: ',arrelement);
console.log(arr);
let value= marks.indexOf(78);
console.log(value);

//Mutating or modifying arrays:
marks.push(4567);
marks.shift();
marks.unshift(987);
marks.pop();
marks.splice(1,3);
marks.reverse();
console.log(marks);