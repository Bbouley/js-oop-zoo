var Animal = require("./animal");

function Zoo(name, location){
  this.name = name;
  this.location = location;
  this.status = 'closed';
  this.animals = [];
}

Zoo.protoype.location = function(newLocation){
  this.location = location;
};

Zoo.protoype.open = function(){
  this.status = 'open';
};

Zoo.protoype.close = function(){
  this.status = 'close';
};

Zoo.protoype.isOpen = function(){
  if (this.status !== 'closed'){
    return 'Open!';
  }
};

Zoo.protoype.addAnimal = function(name, age, kind){
  if(this.status === 'open'){
    var animal = new Animal(name, age, kind);
      for (var i = 0; i < this.animals.length; i++) {
        if(this.animals[i] !== animal){
        this.animals.push(animal);
       }
      }
     }
    };

module.exports = Zoo;
