// CLASSES
class Olympian{
    // constructor -> things to do upon creation of a new olympian
    constructor(nameInput, countryInput, heightInput){
        // we can define the properties that every olympian will have upon creation here inside the constructor
        this.name = nameInput;
        this.country = countryInput;
        this.height = heightInput;
        this.energyLevel = 100; // default value because every olympian that gets created will start with 100 energy level
    }

    // functionalities for an olympian will be defined using methods
    competeInEvent(){
        console.log("competing in event...")
        this.energyLevel -= 5;
        return this; 
    }

    takeIceBath(){
        console.log("Taking ice bath to fully restore energy!")
        this.energyLevel = 100;
    }

    displayInfo(){
        // Hi my name is Luka Doncic, I am from Slovenia. I am this many inches tall: 79. Currently my energy level is: 100
        // a string that can have variables in it using javascript template literal
        `Hi my name is ${this.name}. I am from ${o1.country}. I am ${this.height} inches tall. My energy level is currently at ${this.energyLevel}` ;
        console.log(info);
    }
}

// INHERITANCE AND SUPER

class Swimmer extends Olympian{
    constructor(nameInput, countryInput, heightInput, swimSpeedInput){
        super(nameInput, countryInput, heightInput) //super means do what the parent constructor is doing. This will allow the constructor of the swimmer class to reference the constructor of the parent (olympian) class to set the name, country, and height just like the parent class did. We need this we want to add our own unique attributes to the swimmer class (like swimSpeed);
        this.swimSpeed = swimSpeedInput;
    }

    swim(){
        console.log("splash splash....i swim wha");
        this.energyLevel -= 5;
    }

}

class Curler extends Olympian{
    constructor(nameInput, countryInput, heightInput, sweepSpeedInput){
        super(nameInput, countryInput, heightInput)
        this.swimSpeed = sweepSpeedInput;
    }

    sweep(){
        console.log("I practice like cinderella, now im sweeping professionally. Follow your dreams.")
        this.energyLevel -= 50;
        return this;
    }

}


let phelps = new Swimmer("Michael Phelps", "USA", 72, 99);
let caeleb = new Swimmer("Caeleb Dressel", "USA", 70, 80)

let chris = new Curler("Chris Plys", "USA", 68, 10);
console.log(chris)

phelps.competeInEvent().competeInEvent().displayInfo();
chris.sweep().sweep().takeIceBath().displayInfo()


// console.log(phelps)
// console.log(caeleb)


// outside of the class, we can create INSTANCES of the Olympian class

// let o1 = new Olympian("Luka Doncic", "Slovenia", 79); 
// let o2 = new Olympian("Michael Phelps", "USA", 72);
// let o3 = new Olympian("Simone Biles", "USA", 60);


// o1.competeInEvent().competeInEvent().competeInEvent().takeIceBath().displayInfo()

// o2.competeInEvent().displayInfo();



