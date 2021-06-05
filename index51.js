// Iterators

function fruitsIterator(values){
    let nextIndex=0;
    //We will return an object
    return {
        next: function(){
            if (nextIndex < values.length){
                //we will return this object
               return {
                    value: values[nextIndex++],
                    done: false
                }
            }
            else{
                return{
                    done: true
                }
            }
        }
    }
}

const myArray=['Apple','Grapes','Orange','Bhindi'];
console.log("My array is ", myArray);

//Using the Itertors
const fruits= fruitsIterator(myArray);
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());