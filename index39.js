/*
Promise: Best video on promises
->resolve
->reject
->pending
*/

function func1(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
        const error = true;
        if(!error){
            console.log('Function: Your promise has been resolved');
            resolve();
        }
        else{
            console.log('Your promise has not been resolved');
            reject('Sorry not fullfilled')
        }
    }, 2000);
   })
}

func1().then(function(){
    console.log('Amit Thanks for resolving')
}).catch(function(){
    console.log('Amit: Very bad bro')
})