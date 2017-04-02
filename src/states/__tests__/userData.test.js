import reducer from '../userData'
import * as actions from '../userData'

describe('userData reducer', () => {
  it('should return the initial state', () => {
    const state = undefined
    const action = {}
    const right = {}
    expect(reducer(state, action)).toEqual(right)
  })

  it('should handle SUBMIT', () => {
    const state = {a: 1}
    const action = {type: 'userData/SUBMIT', value: {b: 2}}
    const right = {a: 1, b: 2}
    expect(reducer(state, action)).toEqual(right)
  })
})

describe('userData actions', () => {
  const value = {a: 1}
  const right = {type: 'userData/SUBMIT', value: {a: 1}}
  expect(actions.submitUserData(value)).toEqual(right)
})
