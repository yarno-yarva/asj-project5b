import Undead from '../undead';


test('create class Undead', () => {
  
  const result = new Undead ('Nikita');
  const etalon = {
      "name": "Nikita",
      "health": 100,
      "level": 1,
      "type": "Undead",
      "attack": 25,
      "defence": 25
  };

  expect(result).toEqual(etalon);
});
