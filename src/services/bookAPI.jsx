export const postAuthor = authorName => {
  return fetch(`${process.env.API_URL}/api/v1/authors`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(authorName)
  })
    .then(res => res.json())
    .then(json => json._id);
};
