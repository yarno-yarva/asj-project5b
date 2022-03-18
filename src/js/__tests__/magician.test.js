import Magician from '../magician';


test('create class Magician', () => {
  
  const result = new Magician ('Nikita');
  const etalon = {
      "name": "Nikita",
      "health": 100,
      "level": 1,
      "type": "Magician",
      "attack": 10,
      "defence": 40
  };

  expect(result).toEqual(etalon);
});
