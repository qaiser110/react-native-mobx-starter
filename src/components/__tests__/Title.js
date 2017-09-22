import React from 'react'
import { shallow } from 'enzyme'
import Title from '../Title'

it('renders correctly', () => {
  const wrapper = shallow(<Title text="Sample Text" />)
  expect(wrapper).toMatchSnapshot()
})
