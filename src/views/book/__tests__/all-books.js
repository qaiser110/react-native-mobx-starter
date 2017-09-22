import React from 'react'
import { shallow } from 'enzyme'
import AllView from '../tabs/all-books'
import Title from '../../../components/Title'

it('renders correctly', () => {
  const wrapper = shallow(<AllView />)
  expect(wrapper).toMatchSnapshot()

  expect(wrapper.find(Title)).toBeTruthy()
  expect(wrapper.find(Title).dive().length).toBe(1)
})
