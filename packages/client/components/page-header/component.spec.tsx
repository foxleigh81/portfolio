import React from 'react'
import { shallow } from 'enzyme'
import PageHeader from '.'

test('Page Header renders correctly', () => {
    const pageHeader = shallow(<PageHeader/>)
    expect(pageHeader.find('h1').text()).toEqual('Welcome to the party, pal')
})