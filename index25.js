/*
you have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div it should be converted into an editable item. Whenever user clicks away (blur) save the into the local storage.
*/

let divElem=document.createElement("div");
let val=localStorage.getItem('text');
if(val==null){
let text=document.createTextNode('This is my element. click to edit it');
}
else{
    text=document.createTextNode(val);
}
divElem.appendChild(text);
divElem.setAttribute('id','elem');
divElem.setAttribute('class','elem');
divElem.setAttribute('style','border:2px solid black; width:154px; margin: 34px; padding:23px;')
let container=document.querySelector('.container');
let First=document.getElementById('myFirst');

//Insert the element before element with id first
container.insertBefore(divElem,First);


console.log(divElem,container,First);

//add event listener to the divElem
divElem.addEventListener('click', function(){
    let noTextAreas= document.getElementsByClassName('textarea').length;
    if(noTextAreas==0){
    let html=elem.innerHTML;
    divElem.innerHTML=`<textarea class='form-control textarea' id='textarea' rows='3'>${html}</textarea>`;
    }
    let textarea=document.getElementById('textarea');
    textarea.addEventListener('blur',function(){
        elem.innerHTML=textarea.value;
    })
})