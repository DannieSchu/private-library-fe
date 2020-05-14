export const ADD_BOOK = 'ADD_BOOK';
export const addBook = book => ({
  type: ADD_BOOK,
  payload: book
});

export const SET_BOOKS = 'SET_BOOKS';
export const setBooks = books => ({
  type: SET_BOOKS,
  payload: books
});
