import isRequired from '../isRequired'

it('works when value is defined', () => {
  expect(isRequired()('a')).toBeUndefined()
})

it('returns error when value is undefined', () => {
  const right = 'is Required'
  expect(isRequired()(undefined)).toMatch(right)
})
