function Dog() {
  this.name = "asd";
  this.color = "brown";
  this.numLegs = 4;
}
let hound = new Dog();

// # constructor with parameters
function Dog2(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}
let terrier = new Dog2("asd", "yellow");

// # Verify an Object's Constructor with instanceof
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
let myHouse = new House(5);
if (myHouse instanceof House) {
  console.log('true')
} else {
  console.log('false')
}

// # Understand Own Properties (printing the properties of an object)
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}
let canary = new Bird("Tweety");
let ownProps = [];
for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
console.log(ownProps); // prints [ "name", "numLegs" ]

// # Use Prototype Properties to Reduce Duplicate Code
function Aso(name ) {
  this.name = name; // own property
}
Aso.prototype.numLegs = 2; // prototype property
let beagle = new Aso("Snoopy");
console.log(beagle.numLegs);

// # Iterate Over All Properties
let ownProps2 = [];
let prototypeProps2 = [];
for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps2.push(property); // prints ["name"]
  } else {
    prototypeProps2.push(property); // prints ["numLegs"]
  }
}

// Understand the Constructor Property
function joinAsoFraternity(candidate) {
  return candidate.constructor === Aso;
}

// # Change the Prototype to a New Object
/* A more efficient way is to set the prototype to a new object that
already contains the properties. This way, the properties are added all at once: */
Aso.prototype = {
  numLegs: 2,
  eat: function () {
    console.log('nom nom');
  },
  describe: function () {
    console.log('hello');
  }
};

// # Remember to Set the Constructor Property when Changing the Prototype
Aso.prototype = {
  constructor: Aso // this can be added to existing one above
  // ... (see above)
};

// # Understand Where an Object’s Prototype Comes From
/*
 beagle inherits its prototype from the Aso constructor function.
 You can show this relationship with the isPrototypeOf method:
 */
Aso.prototype.isPrototypeOf(beagle); // returns true

// # Understand the Prototype Chain
/*
typeof Bird.prototype; // => object

Because a prototype is an object, a prototype can have its own prototype!
In this case, the prototype of Bird.prototype is Object.prototype:

Object.prototype.isPrototypeOf(Bird.prototype);

Object is a supertype for all objects in JavaScript.
Therefore, any object can use the hasOwnProperty method.
*/
Object.prototype.isPrototypeOf(Aso.prototype); // returns true

