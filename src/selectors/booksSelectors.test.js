import { getBooks } from "./booksSelectors";

describe('books selectors', () => {
  it('selects all books from state', () => {
    const state = {
      books: [
        {
          _id: 'f4fvfwev',
          title: 'Mansfield Park',
          author: 'Jane Austen',
          genre: 'literature',
          pages: 325
        }, {
          _id: 'fwegwh3',
          title: 'Pride and Prejudice',
          author: 'Jane Austen',
          genre: 'literature',
          pages: 325
        },
      ]
    };
    const books = getBooks(state);

    expect(books).toEqual([
      {
        _id: 'f4fvfwev',
        title: 'Mansfield Park',
        author: 'Jane Austen',
        genre: 'literature',
        pages: 325
      }, {
        _id: 'fwegwh3',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        genre: 'literature',
        pages: 325
      },
    ]);
  });
});
