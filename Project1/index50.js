console.log('hii')
const name=document.getElementById("name");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
let validEmail=false;
let validPhone= false;
let validUser=false;
$('#failure').hide();
$('#success').hide();

name.addEventListener('blur',()=>{
    console.log("name is blur");
   // validate here
   let regex=/^[a-zA-Z]([0-9a-zA-Z]){2,10}$/
   let str= name.value;
   console.log(regex,str);
   if(regex.test(str)){
       console.log('Your Name is valid');
       name.classList.remove('is-invalid');
       validUser=true;
   }
   else{
       console.log("Your Name is Not valid");
       name.classList.add('is-invalid');
       validUser=false;
   }
})

email.addEventListener('blur',()=>{
    console.log("email is blur");
    //Validate here
    let regex=/^([_\-\.0-9a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]){3,9}$/;
    let str= email.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log("Your Email is Valid");
        email.classList.remove('is-invalid');
        validEmail=true;
    }
    else{
        console.log("Your Email is not Valid");
        email.classList.add('is-invalid');
        validEmail=false;
    }
})

phone.addEventListener('blur',()=>{
    console.log("phone is blur");
    //Validate here
    let regex=/^[0-9]{10}$/;
    let str=phone.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('Your Phone is valid');
        phone.classList.remove('is-invalid');
        validPhone=true;
    }
    else{
        console.log('Your Phone is not valid');
        phone.classList.add('is-invalid');
        validPhone=false
    }
})

let submit=document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('You clicked on Submit');
    //submit your form here
    if(validEmail && validUser && validPhone){
        console.log('Phone,email,user are valid. Submitting the form');
        let failure =document.getElementById('failure');
        let success=document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();
    }
    else{
        console.log('One of Phone,emailor user are not valid. Hence not submitting the form Please correct the error and try again');
        let failure=document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('close');
        $('#success').hide();
        $('#failure').show();
    }
   
})