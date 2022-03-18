import Swordsman from '../swordsman';


test('create class Swordsman', () => {
  
  const result = new Swordsman ('Nikita');
  const etalon = {
      "name": "Nikita",
      "health": 100,
      "level": 1,
      "type": "Swordsman",
      "attack": 40,
      "defence": 10
  };

  expect(result).toEqual(etalon);
});
