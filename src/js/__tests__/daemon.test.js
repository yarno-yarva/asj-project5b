import Daemon from '../daemon';


test('create class Daemon', () => {
  
  const result = new Daemon ('Nikita');
  const etalon = {
      "name": "Nikita",
      "health": 100,
      "level": 1,
      "type": "Daemon",
      "attack": 10,
      "defence": 40
  };

  expect(result).toEqual(etalon);
});
