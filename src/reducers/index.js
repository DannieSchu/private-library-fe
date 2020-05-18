import { combineReducers } from 'redux';
import books from './booksReducer'; 
import notes from './notesReducer';

export default combineReducers ({
  books: books,
  notes: notes
});
