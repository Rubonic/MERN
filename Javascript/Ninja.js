class Ninja{
    constructor(nameInput, healthInput){
        this.name = nameInput;
        this.health = healthInput;
        this.speed = 3;
        this.strength = 3;
    }

    displayName(){
        console.log(`My name is ${this.name}`);
        return this;
    }

    showStats() {
        console.log(`Name: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Strength: ${this.strength}`);
        return this;
    }

    drinkSake() {
        console.log(`${this.name} drank sake`);
        this.health += 10;
        return this;
    }
}

let naurto = new ninja("Naruto", 10, 3);

naurto.displayName().showStats().drinkSake().showStats();