let obj= {
    name: "Amit",
    channel: "Coding Skill develop",
    address: "Mars"
}
function Obj(givenName){
    this.name=givenName
}

Obj.proptotype.getName=function(){
    return this.name;
}

Obj.proptotype.setName=function(nawName){
    this.name=newName;
}

let obj2=new Obj("Krishna");
console.log(obj2);