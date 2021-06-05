const proto={
    slogan: function(){
        return `This company is the best`;
    },
    changeName: function(newName){
        this.name= newName
    }
}
const amit=Object.create(proto);
amit.name = "Amit";
amit.role = "Programmer";
amit.changeName("Amit2")
console.log(amit);