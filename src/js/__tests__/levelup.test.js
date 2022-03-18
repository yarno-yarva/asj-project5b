import Bowman from '../bowman';


test('levelUP class Bowman', () => {
  
  const result = new Bowman ('Nikita');
  result.levelUp();

  const etalon = {
      "name": "Nikita",
      "health": 100,
      "level": 2,
      "type": "Bowman",
      "attack": 30,
      "defence": 30
  };

  expect(result).toEqual(etalon);
});

test('levelUP fail', () => {
  
  const result = new Bowman ('Nikita');
  result.health = 0;
  result.levelUp();

  expect(result).toThrow(Error('Это труп невозможно повысить уровень'))
});