export const postAuthor = author => {
  return fetch(`${process.env.API_URL}/api/v1/authors`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: author })
  })
    .then(res => res.json())
    .then(json => json._id);
};

export const postBook = book => {
  return fetch(`${process.env.API_URL}/api/v1/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(book)
  })
    .then(res => res.json());
};

export const fetchBooks = () => {
  return fetch(`${process.env.API_URL}/api/v1/books`)
    .then(res => res.json())
    .then(json => json.map(book => ({
      _id: book._id,
      author: book.authorId.name,
      title: book.title,
      genre: book.genre,
      pages: book.pages
    })));
};
