
let employee = function (name, lastname) {
  this.name = name,
  this.lastname = lastname,
  this.toString = function () { return this.name + " " + this.lastname; }
};

let s = new employee("skander", "turki");
console.log( s.toString() );