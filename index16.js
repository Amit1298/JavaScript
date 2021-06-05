let element= document.createElement("li");
console.log(element);

element.className= 'childul';
console.log(element);


let elem2=document.createElement('h3');
elem2.id='elem2';
elem2.className= 'elem2';
let tnode= document.createTextNode('This is a create node for elem2');
elem2.appendChild(tnode);
element.replaceWith(elem2);