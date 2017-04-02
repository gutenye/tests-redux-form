import React from 'react'
import Header from '../Header'
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<Header title='a' step={1} />)
})

it('renders title', () => {
  const wrapper = shallow(<Header title='a' step={1} />)
  const title = <h1>a</h1>
  expect(wrapper.contains(title)).toEqual(true)
})
