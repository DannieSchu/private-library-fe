import React from 'react';
import { shallow } from 'enzyme';
import Book from './Book';

describe('Book component', () => {
  it('renders Book', () => {
    const wrapper = shallow(<Book title="The Idiot" genre="Literature" pages={450} />);
    expect(wrapper).toMatchSnapshot();
  });
});
