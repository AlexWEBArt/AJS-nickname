import Validator from '../nickname';

test('nickname validation', () => {
  const result1 = new Validator('Elu332siv').validateUsername();
  const result2 = new Validator('Elusiv').validateUsername();
  expect(result1).toBe(false);
  expect(result2).toBe(true);
});
