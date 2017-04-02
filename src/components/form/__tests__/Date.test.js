import React from 'react'
import Date from '../Date'
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  const props = {
    input: {value: ''},
    meta: {},
    label: 'a',
  }
  shallow(<Date {...props} />)
})
