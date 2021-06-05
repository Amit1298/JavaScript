// const age= 56;
// if (age===19){
//     console.log('Age is 19');
// }
// //multiple condition are check in case we use a else if

// //=== it is used to check type and value but == is only check the value only

// // in case of if it wil check the all condition of if
// else if(age===56){
//     console.log('Age is 56');
// }
// else{
//     console.log('Age is not 19');
// }

const age= 45;
const doesDrive=true;
if (age>=21 && doesDrive){
    console.log('You can drive');
}
else{
    console.log('You can not Drive');
}


console.log(age==45? 'Age is 45': 'Age is not 45')


switch (age){
    case 18:
        console.log('You are 18');
        break;
    case 28:
        console.log('You are 28');
        break;
    case 38:
        console.log('You are 39');
        break;
    default :
    console.log('You are 18');
    break;
}