// Button with id myBtn
let myBtn= document.getElementById("myBtn");


//div with id contant
let content=document.getElementById("content");

// function getData(){
//     console.log("Started getData");
//     url="https://api.github.com/users";
//     fetch(url).then((response)=>{
//         console.log("Inside first then");
//         return response.json();
//     }).then((data)=>{
//         console.log("Inside second then")
//         console.log(data);
//     })
// }

// console.log("Before running getData")
// getData();
// console.log("After running getData")



// function getData(){
//     console.log("Started getData");
//     url="amit.txt";
//     fetch(url).then((response)=>{
//         console.log("Inside first then");
//         return response.text();
//     }).then((data)=>{
//         console.log("Inside second then")
//         console.log(data);
//     })
// }

// console.log("Before running getData")
// getData();
// console.log("After running getData")

function postData(){
    url="https://api.github.com/users";
    params={
        method:'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(url,params).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    })
}

postData();