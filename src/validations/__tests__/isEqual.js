import isEqual from '../isEqual'

it('returns when value is empty', () => {
  expect(isEqual()('')).toBeUndefined()
})

it('works when value is equal', () => {
  expect(isEqual('password')('a', {password: 'a'})).toBeUndefined()
})

it('returns error when value is not equal', () => {
  const right = 'is not the same'
  expect(isEqual('password')('a', {password: 'b'})).toMatch(right)
})
