import React from 'react'
import Radio from '../Radio'
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  const props = {
    input: {value: ''},
    meta: {},
    options: [],
    label: 'a',
  }
  shallow(<Radio {...props} />)
})
