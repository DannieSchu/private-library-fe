import { addBook, ADD_BOOK, setBooks, SET_BOOKS } from './booksActions';

describe('books actions', () => {
  it('creates an ADD_BOOK action', () => {
    const action = addBook({
      _id: 'f4fvfwev',
      title: 'Mansfield Park',
      authorId: 'fwegew09vjos',
      genre: 'literature',
      pages: 325
    });

    expect(action).toEqual({
      type: ADD_BOOK,
      payload: {
        _id: 'f4fvfwev',
        title: 'Mansfield Park',
        authorId: 'fwegew09vjos',
        genre: 'literature',
        pages: 325
      }
    });
  });

  it('creates a SET_BOOKS action', () => {
    const action = setBooks([{
      _id: 'f4fvfwev',
      title: 'Mansfield Park',
      author: 'fwegew09vjos',
      genre: 'literature',
      pages: 325
    }, {
      _id: 'gvwej09jivo',
      title: 'Pride and Prejudice',
      author: 'fwegew09vjos',
      genre: 'literature',
      pages: 325
    }]);

    expect(action).toEqual({
      type: SET_BOOKS,
      payload: [{
        _id: 'f4fvfwev',
        title: 'Mansfield Park',
        author: 'fwegew09vjos',
        genre: 'literature',
        pages: 325
      }, {
        _id: 'gvwej09jivo',
        title: 'Pride and Prejudice',
        author: 'fwegew09vjos',
        genre: 'literature',
        pages: 325
      }]
    });
  });
});
