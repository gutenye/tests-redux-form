import React from 'react'
import Select from '../Select'
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  const props = {
    input: {value: ''},
    meta: {},
    options: [],
    label: 'a',
  }
  shallow(<Select {...props} />)
})
