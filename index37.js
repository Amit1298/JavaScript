// Pretend that this response is coming form the server
const students=[
    {name:"Amit",subject:"JavaScript"},
    {name:"Krishna",subject:"Machine Learing"}
]

function enrollStudent(student,callback){
    setTimeout(function(){
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 3000);
}

//function getStudents()
function getStudents(){
    setTimeout(function(){
        let str="";
        students.forEach(function(student){
            str += `<li> ${student.name}</li>`
        });
        document.getElementById("students").innerHTML = str;
        console.log("Students have been fetched")
    }, 1000);
}

let newStudent ={name:"Satty",subject:"Python"}
enrollStudent(newStudent,getStudents);
// getStudents();