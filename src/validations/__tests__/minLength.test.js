import minLength from '../minLength'

it('returns undefined when value is undefined', () => {
  expect(minLength(3)(undefined)).toBeUndefined()
})

it('returns error when value is less 3 characters', () => {
  const right = 'must be at lest 3 characters'
  expect(minLength(3)('a')).toMatch(right)
})

it('returns undefined when value is more than 3 characters', () => {
  expect(minLength(3)('abcde')).toBeUndefined()
})
