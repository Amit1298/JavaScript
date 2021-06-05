let car={
    name: 'Maruti 800',
    topSpeed: 92,
    run: function (){
        console.log('car is running');
    }
}
console.log(car);
console.log(car.name);
console.log(car.run());
console.log(car.topSpeed);

// Creatig a constructor for cars
function GeneralCar(givenName,givenSpeed){
    this.name= givenName;
    this.topSpeed=givenSpeed;
    this.run=function (){
        console.log(`${this.name} is running`)
        return 2021;
    }
}
car1 = new GeneralCar('nissian',189);
console.log(car1)