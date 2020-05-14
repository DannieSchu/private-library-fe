import React from 'react';
import { shallow } from 'enzyme';
import BookForm from './BookForm';

describe('BookForm component', () => {
  it('renders BookForm', () => {
    const wrapper = shallow(<BookForm />);
    expect(wrapper).toMatchSnapshot();
  });
});

