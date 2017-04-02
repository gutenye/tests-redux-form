import React from 'react'
import { Footer } from '../Footer'
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<Footer submitName='a' />)
})

it('renders Next button', () => {
  const wrapper = shallow(<Footer submitName='a' />)
  expect(wrapper.find('.next').exists()).toEqual(true)
})

it('renders Back button', () => {
  const wrapper = shallow(<Footer submitName='a' prevRoute='/' />)
  expect(wrapper.find('.prev').exists()).toEqual(true)
})

it('does not render Back button when no prevRoute', () => {
  const wrapper = shallow(<Footer submitName='a' />)
  expect(wrapper.find('.button.prev').exists()).toEqual(false)
})
