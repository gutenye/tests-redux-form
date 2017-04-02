import React from 'react'
import Input from '../Input'
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  const props = {
    input: {value: ''},
    meta: {},
    label: 'a',
  }
  shallow(<Input {...props} />)
})
