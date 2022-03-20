import {Character} from '../app';


test('create class Character', () => {
  const name = 'Nikita';
  const newClass = new Character (name); 

  const etalon = {
      "name": "Nikita",
      "health": 100,
      "level": 1,
  };

  const result = newClass;
  expect(result).toEqual(etalon);
});

test('error class Character', () => {
  const name = 'Nikita1234567890';
 
  expect(() => new Character(name)).toThrowError('Возможное название от 2-х до 10-ти символов');
});
  

