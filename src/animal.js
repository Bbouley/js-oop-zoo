function Animal(name, age, kind){
  this.name = name;
  this.age = age;
  this.kind = kind;
  this.awake = false;
}

Animal.prototype.oink = function(){
  if (this.kind === 'Pig'){
    return 'oink';
  } else {
    return "I'm not a pig";
  }
};

Animal.prototype.growUp = function(){
  this.age += 1;
  return this.age;
};

Animal.prototype.feed = function(){
  if (this.awake === true){
    return 'NOM NOM NOM';
  } else {
    return 'SSSH, it\'s sleeping';
  }
};

Animal.prototype.wakeUp = function(){
  this.awake = true;
  return this.awake;
};

Animal.prototype.sleep = function(){
  this.awake = false;
};

module.exports = Animal;
