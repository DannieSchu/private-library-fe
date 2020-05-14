import { addBook, ADD_BOOK } from './booksActions';

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
});
