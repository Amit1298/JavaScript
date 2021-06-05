// let element= document.getElementById('myFirst');
// // element=element.className;
// // element.style.color= 'red';
// // element=element.childNodes
// element.innerText= 'Amit is a Good Boy';
// element.innerHTML='<b>Krishna is a Good Girl</b>'
// console.log(element);

// let sel=document.querySelector('#myFirst');
// sel=document.querySelector('.child');
// console.log(sel)


let elems =document.getElementsByClassName('child');
elems= document.getElementsByClassName("container");
elems= document.getElementsByTagName('div');
// console.log(elems[0]);
console.log(elems)

Array.from(elems).forEach(element=>{
    console.log(element);
    element.style.color= 'blue';
})