var Animal = require('../src/animal.js'),
Zoo = require('../src/zoo.js');

var animal;
var zoo;

describe('Zoo', function(){

  beforeEach(function(){
    zoo = new Zoo("Bronx","NYC");
    pig = new Animal("Babe",10,"Pig");
    lion = new Animal("Snoop",10,"lion");
  });

  describe('#changeLocation', function(){
    it('should change locations', function(){
      expect(zoo.changeLocation('Kensington, London')).toEqual('Kensington, London');
    });
  });

  describe('#open', function(){
    it('should change status to open', function(){
      expect(zoo.open()).toEqual('open');
    });
  });


  describe('#isOpen', function(){
    it('should see if the zoo is open', function(){
      expect(zoo.isOpen()).toEqual('Closed!');
    });
    it('should see if the zoo is closed', function(){
      zoo.open();
      expect(zoo.isOpen()).toEqual('Open!');
    });
  });

  describe('#animals', function(){
    it('should initially be empty', function(){
     expect(zoo.animals).toEqual([]);
    });
  });


  describe('#addAnimal', function(){
    it('should only add an animal to the animals array when the zoo is open', function(){
      expect(zoo.addAnimal()).toEqual('Zoo is closed!');
    });
    it('should add an animal to the animals array', function(){
      zoo.open();
      zoo.addAnimal(pig);
      expect(zoo.animals.length).toEqual(1);
    });

    it('should only add instances of animals', function(){
      zoo.open();
      expect(zoo.addAnimal('Richard')).toEqual('That\'s not an animal!');
    });

    it('should not add duplicates', function(){
      zoo.open();
      zoo.addAnimal(pig);
      expect(zoo.addAnimal(pig)).toEqual('That animal\'s already here!');
    });
  });

  describe('#removeAnimal', function(){
    it('should remove an animal from the animals array if the zoo is open', function(){
      expect(zoo.removeAnimal()).toEqual('Zoo is Closed!');
      zoo.open();
      expect(zoo.removeAnimal()).toEqual('That animal\'s not here!');
      zoo.addAnimal(pig);
      zoo.addAnimal(lion);
      zoo.removeAnimal(pig);
      expect(zoo.animals.length).toEqual(1);
    });
  });

});


