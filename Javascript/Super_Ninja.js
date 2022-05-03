class Ninja{
    constructor(nameInput){
        this.name = nameInput;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log("Name: ",this.name);
        console.log("Strength: ",this.strength);
        console.log("Speed: ",this.speed);
        console.log("Health: ",this.health);
    }
    drinkSake(){
        console.log("Health: ",this.health);
        this.health += 10;
    }
    
}

class Sensei extends Ninja{
    constructor(nameInput){
        super(nameInput);
        super.health = 125;
        super.speed = 10;
        super.strength = 10;
        
        this.nameInput=nameInput;
        this.wisdom = 10;

    }
    speakWisdom(){
        console.log("The leaf does not far from the tree.");
    }
}
const superSensei = new Sensei("Master Sasuke");
superSensei.speakWisdom().superSensei.drinkSake().superSensei.showStats();    