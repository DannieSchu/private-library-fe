import { addbook } from '../actions/booksActions';
import reducer from './booksReducer';

describe('books reducer', () => {
  it('handles the ADD_BOOK action', () => {
    const state = [];
    const action = addbook({
      _id: 'f4fvfwev',
      title: 'Mansfield Park',
      authorId: 'fwegew09vjos',
      genre: 'literature',
      pages: 325
    });

    const newState = reducer(state, action);

    expect(newState).toEqual([{
      _id: 'f4fvfwev',
      title: 'Mansfield Park',
      authorId: 'fwegew09vjos',
      genre: 'literature',
      pages: 325
    }]);
  });
});
