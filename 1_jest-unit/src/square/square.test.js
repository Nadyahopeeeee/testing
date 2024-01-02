const validateValue = require('../validateValue/validateValue');
const square = require('./square');

describe('square', () => {
  let mockValue;

  // перед каждым тестом
  beforeEach(() => {
    mockValue = Math.random();
    // ДОБАВИТЬ В БД
  })

  // один раз перед всеми тестами
  beforeAll(() => {
    
  })
  test('Correct value', () => {
    // expect(square(2)).toBe(4)
    // expect(square(2)).toBeLessThan(5)
    // expect(square(2)).toBeGreaterThan(3)
    // expect(square(2)).not.toBeUndefined()

    const spyMathPow = jest.spyOn(Math, 'pow');
    square(2);
    expect(spyMathPow).toBeCalledTimes(1)
  })


  test('Correct value', () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(1);
    expect(spyMathPow).toBeCalledTimes(0)
  })

  afterEach(() => {
    // отчищаем моки после каждого теста, чтобы они  не накапливали вызовы
    jest.clearAllMocks()

    // например: УДАЛИТЬ ИЗ БД
  })

  afterAll(() => {

  })
})