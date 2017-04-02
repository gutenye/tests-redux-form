import isEmail from '../isEmail'

it('returns when value is empty', () => {
  expect(isEmail()('')).toBeUndefined()
})

it('works when value is valid email', () => {
  expect(isEmail()('a@a.com')).toBeUndefined()
})

it('returns error when email is invalid', () => {
  const right = 'is Invalid'
  expect(isEmail()('a')).toMatch(right)
})
