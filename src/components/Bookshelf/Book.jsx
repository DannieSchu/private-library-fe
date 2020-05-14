import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author, genre, pages }) => (
  <section>
    <h3>{title}</h3>
    <p>Author: {author}</p>
    <p>Genre: {genre}</p>
    <p>Number of pages: {pages}</p>
  </section>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  pages: PropTypes.number.isRequired,
};

export default Book;

