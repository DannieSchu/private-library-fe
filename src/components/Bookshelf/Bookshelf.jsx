import React, { useEffect } from 'react';
import Book from './Book';
import { fetchBooks } from '../../services/bookAPI';
import { setBooks } from '../../actions/booksActions';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../selectors/booksSelectors';

const Bookshelf = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchBooks()
      .then(books => {
        dispatch(setBooks(books));
      });
  }, []);

  const books = useSelector(getBooks);

  const bookElements = books.map(book => (
    <li key={book._id}>
      <Book {...book} />
    </li>)
  );
  
  return (
    <ul>
      {bookElements}
    </ul>
  );
};

export default Bookshelf;

