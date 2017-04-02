const initialState = {}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case 'userData/SUBMIT':
      return {...state, ...action.value}
    default:
      return state
  }
}

export function submitUserData(value) {
  return {type: 'userData/SUBMIT', value}
}
