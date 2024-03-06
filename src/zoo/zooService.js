const animal = {
    name : null,
    speak : function(message, showSpeakInputCallback) {
        if(!message) {
            // return empty message and ask user for input
            showSpeakInputCallback();
            return "";
        }
        const words = message.split(" ");
        const modifiedMessage = words.join(` ${this.sound} `);
        return modifiedMessage;
    },
    
    eat: function() {
        return `I am eating ${this.food}`;
    },
    move: function() {
        return `I am ${this.movement}`;
    },
    sound: null,
    food: null,
    movement: null
}

// Create objects for different animal types
const tiger = Object.create(animal);
tiger.name = "Tiger";
tiger.sound = "Grrr!";
tiger.food = "meat";
tiger.movement = "walking";

const lion = Object.create(animal);
lion.name = "Lion";
lion.sound = "Roar!";
lion.food = "meat";
lion.movement = "roaming";

const dog = Object.create(animal);
dog.name = "Dog";
dog.sound = "Woof!";
dog.food = "dog food";
dog.movement = "running";

const hippo = Object.create(animal);
hippo.name = "Hippo";
hippo.sound = "Grunt!";
hippo.food = "plants";
hippo.movement = "swimming";

const horse = Object.create(animal);
horse.name = "Horse";
horse.sound = "Neigh!";
horse.food = "hay";
horse.movement = "galloping";

const animals = { 
    tiger, 
    lion, 
    dog, 
    hippo, 
    horse, 
    state: {}, 
    setState: function(newState) { this.state = { ...newState } } 
}

export default animals;