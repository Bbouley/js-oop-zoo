var Animal = require("./animal");

function Zoo(name, location){
  this.name = name;
  this.location = location;
  this.status = 'closed';
  this.animals = [];
}

Zoo.prototype.changeLocation = function(newLocation){
  this.location = newLocation;
  return this.location;
};

Zoo.prototype.open = function(){
  this.status = 'open';
  return this.status;
};

Zoo.prototype.close = function(){
  this.status = 'closed';
  return this.status;
};

Zoo.prototype.isOpen = function(){
  if (this.status === 'open'){
    return 'Open!';
  } else if(this.status === 'closed') {
    return 'Closed!';
  }
};

Zoo.prototype.addAnimal = function(animal){
  var test = animal instanceof Animal;
  if(this.status === 'open' && test === true){
        if(this.animals.indexOf(animal) < 0){
        this.animals.push(animal);
       } else {
        return 'That animal\'s already here!';
       }
     } else if(this.status === 'closed'){
      return 'Zoo is closed!';
     } else if (test === false){
      return 'That\'s not an animal!';
     }
    };

Zoo.prototype.removeAnimal = function(animal){
  var arrayIndex = this.animals.indexOf(animal);
  if (arrayIndex >= 0 && this.status === 'open'){
   this.animals.splice(arrayIndex, 1);
  } else if (this.status === 'closed'){
    return 'Zoo is Closed!';
  } else if (arrayIndex === -1){
    return 'That animal\'s not here!';
  }
};

module.exports = Zoo;
