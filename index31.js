class Employee {
    constructor(givenName,givenExperience,givenDivision){
        this.name=givenName;
        this.experience=givenExperience;
        this.division=givenDivision;
    }
    slogan(){
        return `I am ${this.name} and my experience is ${this.experience} and my company is nill`
    }
    joiningYear(){
        return 2021 - this.experience;
    }
    static add(a,b){
        return a+b
    }
}


class Programmer extends Employee {
    constructor(givenName, givenExperience, givenDivision, language){
        super(givenName, givenExperience, givenDivision);
        this.language= language;
    }
}

amit = new Employee("Amit",21,"Division");
console.log(amit);
console.log(amit.slogan());
console.log(amit.joiningYear());
console.log(Employee.add(34,6));