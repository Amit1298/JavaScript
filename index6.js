const name="Amit";
const greeting="Good morning";
console.log(greeting+" "+name);

let html;
html = "<h1>This is heading </h1> "+"<p>This is paragraph</p>";
html = html.concat(' this ','str3');
console.log(html);
console.log(html.toUpperCase());
console.log(html.length);
console.log(html.toLowerCase());
console.log(html[4]);
console.log(html.indexOf('this'));
console.log(html.indexOf('sgsdjhsc'));
console.log(html.lastIndexOf('is'));
console.log(html.charAt(5));
console.log(html.endsWith('str3'));
console.log(html.includes('fg'));
console.log(html.substring(1,40));
console.log(html.slice(-34));
console.log(html.split(' '));
console.log(html.replace);

let fruit1= "Orange";
let fruit2= "Apple";
let myHtml = `Hello ${name} <h1>This is heading </h1>
<p> this is paragraph</p> You like ${fruit1} and ${fruit2}`;
document.body.innerHTML =myHtml;