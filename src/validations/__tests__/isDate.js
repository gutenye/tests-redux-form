import isDate from '../isDate'

it('works when value is valid date', () => {
  expect(isDate()({year: 1991, month: 11, day: 14})).toBeUndefined()
})

it('returns error when value is empty', () => {
  const right = 'is Required'
  expect(isDate()('')).toMatch(right)
})

it('year must be a number', () => {
  const right = 'YYYY must be a number'
  expect(isDate()({year: 'a', month: 2, day: 30})).toMatch(right)
})

it('month must be a number', () => {
  const right = 'MM must be a number'
  expect(isDate()({year: 2001, month: 'a', day: 30})).toMatch(right)
})

it('day must be a number', () => {
  const right = 'DD must be a number'
  expect(isDate()({year: 2001, month: 1, day: 'a'})).toMatch(right)
})

it('returns error when date is invalid', () => {
  const right = 'Invalid'
  expect(isDate()({year: 1991, month: 2, day: 30})).toMatch(right)
})

it('returns error when date is less 18 years old', () => {
  const right = '18 years old'
  expect(isDate()({year: new Date().getFullYear(), month: 1, day: 1})).toMatch(right)
})
