const myMap =new Map();
const key1= "myStr", key2= {} , key3= function(){};

// Setting map values
myMap.set(key1, 'This is a string');
myMap.set(key2, 'This is a blank obj');
myMap.set(key3, 'This is an empty function');
console.log(myMap);

//Getting the values form  Map

let value1= myMap.get(key1);
console.log(value1);

//Get the size of the map
console.log(myMap.size);

//You can loop using for..of to get keys and values
for(let [key,value]of myMap){
    console.log(key,value);
}

//Get only keys
for(let key of myMap.keys()){
    console.log('Key is ', key);
}