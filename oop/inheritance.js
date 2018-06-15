/*
 Notice in the example below that the eat method is shared by Cat and Bear:

 # The eat method is repeated in two places. The code can be edited to follow
 the DRY principle by creating a supertype (or parent) called Animal:
 */
// Since Animal includes the eat method, you can remove it from Bird and Dog:
function Cat(name) {
  this.name = name;
}
Cat.prototype = {
  constructor: Cat
};
function Bear(name) {
  this.name = name;
}
Bear.prototype = {
  constructor: Bear
};
function Animal() {
}
Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  }
};

// # Set the prototype of the subtype (or child)—in this case, Bird—to be an instance of Animal
// duck inherits all of Animal's properties, including the eat method
// an object can inherit its behavior (methods) from another object by cloning its prototype object
// ChildObject.prototype = Object.create(ParentObject.prototype);
Cat.prototype = Object.create(Animal.prototype);
let meow = new Cat("meow");
meow.eat(); // prints nom nom nom

// # When an object inherits its prototype from another object, it also inherits the supertype's constructor property.
// to reset an Inherited Constructor Property
Cat.prototype.constructor = Cat;

// # Add Methods After Inheritance
function Bird() {
}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
/*
 In addition to what is inherited from Animal, you want to add behavior that is unique to Bird objects.
 Here, Bird will get a fly() function
 */
Bird.prototype.fly = function () {
  console.log("I'm flying!");
};
let eagle = new Bird();
eagle.eat(); // prints nom nom nom
eagle.fly(); // prints I'm flying

// # Override Inherited Methods
function AnimalBird() {
}
AnimalBird.prototype.fly = function () {
  return "I'm flying!";
};
function Penguin() {
}
Penguin.prototype = Object.create(AnimalBird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = function () {
  return "Alas, this is a flightless bird.";
};
let penguin = new Penguin();
console.log(penguin.fly()); // prints Alas, this is a flightless bird.
/*
 1. penguin => Is fly() defined here? No.
 2. Penguin => Is fly() defined here? => Yes. Execute it and stop searching.
 3. AnimalBird => fly() is also defined, but JavaScript stopped searching before reaching this level.
 4. Object => JavaScript stopped searching before reaching this level.
 */

// # Use a Mixin to Add Common Behavior Between Unrelated Objects
/*
 Inheritance does not work well for unrelated objects like Bird and Boat. They can both glide,
 but a Bird is not a type of Boat and vice versa.
 For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.
 */
let bird = {
  name: "Donald",
  numLegs: 2
};
let boat = {
  name: "Warrior",
  type: "race-boat"
};
let glideMixin = function (obj) {
  obj.glide = function () {
    console.log("I'm gliding!");
  }
};
glideMixin(bird);
glideMixin(boat);
bird.glide();
boat.glide();

// # Use Closure to Protect Properties Within an Object from Being Modified Externally
// for instance, bird.name = "Duffy";
// The simplest way to make properties private is by creating a variable within the constructor function.
function Ibon() {
  let hatchedEgg = 10; // private property
  this.getHatchedEggCount = function () { // publicly available method that a bird object can use
    return hatchedEgg;
  };
}
let ducky = new Ibon();
ducky.getHatchedEggCount(); // returns 10

// # Understand the Immediately Invoked Function Expression (IIFE)
// A common pattern in JavaScript is to execute a function as soon as it is declared:
(function () {
  console.log("Chirp, chirp!");
})();
// this is an anonymous function expression that executes right away
// Outputs "Chirp, chirp!" immediately
/*
 Note that the function has no name and is not stored in a variable. The two parentheses () at the end of the
 function expression cause it to be immediately executed or invoked. This pattern is known as an immediately
 invoked function expression or IIFE.
 before:
   function makeNest() {
     console.log("A cozy nest is ready");
   }
   makeNest();
 after:
   (function() {
     console.log("A cozy nest is ready");
   })();
 */

// # Use an IIFE to Create a Module
// An immediately invoked function expression (IIFE) is often used to group related
// functionality into a single object or module.
// For example, an earlier challenge defined two mixins:
/*
function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
*/
// We can group these mixins into a module as follows:
let motionModule = (function () {
  return {
    glideMixin: function (obj) {
      obj.glide = function () {
        console.log("Gliding on the water");
      }
    },
    flyMixin: function (obj) {
      obj.fly = function () {
        console.log("Flying, wooosh!");
      }
    }
  }
})();
let boeing = {
  name: "Boeing 737"
};
motionModule.flyMixin(boeing); // set the mixin so that boeing can fly
boeing.fly();
