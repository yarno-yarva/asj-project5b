import Zombie from '../zombie';


test('create class Zombie', () => {
  
  const result = new Zombie ('Nikita');
  const etalon = {
      "name": "Nikita",
      "health": 100,
      "level": 1,
      "type": "Zombie",
      "attack": 40,
      "defence": 10
  };

  expect(result).toEqual(etalon);
});
