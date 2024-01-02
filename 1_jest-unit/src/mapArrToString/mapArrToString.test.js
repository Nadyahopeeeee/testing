const mapArrToString = require('./mapArrToString');

describe('mapArrToString', () => {
  test('Correct array', () => {
    expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3'])
  })
  test('Uncorrect array', () => {
    expect(mapArrToString([1, 2, 3, null, undefined, 'aggdgh'])).toEqual(['1', '2', '3'])
  })
  test('Empty array', () => {
    expect(mapArrToString([])).toEqual([])
  })
  test('Negative', () => {
    expect(mapArrToString([1, 2, 3])).not.toEqual(['1', '2', '3', '4', '5'])
  })
})

