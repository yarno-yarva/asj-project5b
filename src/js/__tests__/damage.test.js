import Bowman from '../bowman';


test('damage class Bowman', () => {
  
  const result = new Bowman ('Nikita');
  result.damage(50);

  const etalon = {
      "name": "Nikita",
      "health": 62.5,
      "level": 1,
      "type": "Bowman",
      "attack": 25,
      "defence": 25
  };

  expect(result).toEqual(etalon);
});
