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
    .then(json => ({
      _id: json._id,
      author: json.authorId.name,
      title: json.title,
      genre: json.genre,
      pages: json.pages
    }));
};
