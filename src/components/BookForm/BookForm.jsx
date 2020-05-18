import React, { useState } from 'react';
import { postAuthor, postBook } from '../../services/bookAPI';
import { useDispatch } from 'react-redux';
import { addBook } from '../../actions/booksActions';

const BookForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState(null);
  const [genre, setGenre] = useState('literature');

  const handleSubmit = event => {
    event.preventDefault();

    postAuthor(author)
      .then(authorId => {
        postBook({ authorId, title, genre, pages })
          .then(book => {
            dispatch(addBook(book));
          });
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={author} onChange={({ target }) => setAuthor(target.value)} placeholder="Author" />
      <input type="text" value={title} onChange={({ target }) => setTitle(target.value)} placeholder="Title" />
      <label htmlFor="genre">Genre:</label>
      <select id="genre" onChange={({ target }) => setGenre(target.value)}>
        <option value="literature">Literature</option>
        <option value="science fiction">Science Fiction</option>
        <option value="horror">Horror</option>
        <option value="satire">Satire</option>
      </select>
      <input type="number" min={0} value={pages} onChange={({ target }) => setPages(target.value)} placeholder="Page count" />
      <button>Add to Shelf</button>
    </form>
  );
};

export default BookForm;

