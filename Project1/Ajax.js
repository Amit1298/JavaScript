let fetchBtn= document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler);
function buttonClickHandler(){
    console.log('You have Clicked the fetchBtn');

    //Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    xhr.open('GET','amit.txt', true);

    //What to do on progress (optional)
    xhr.onprogress=function(){
        console.log('On Progress');
    }

    //What to do when respose is ready
    xhr.onload=function(){
        if(this.status===200){
            console.log(this.responseText);
        }
        else{
            console.log('Some error occured')
        }
        }

    //send the request
    xhr.send();
}