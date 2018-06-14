function Dog() {
  this.name = "asd";
  this.color = "brown";
  this.numLegs = 4;
}
let hound = new Dog();

// constructor with parameters
function Dog2(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}
let terrier = new Dog2("asd", "yellow");

// Verify an Object's Constructor with instanceof
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
let myHouse = new House(5);
if (myHouse instanceof House) {
  console.log('true')
} else {
  console.log('false')
}

// Understand Own Properties (printing the properties of an object)
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

// Use Prototype Properties to Reduce Duplicate Code
