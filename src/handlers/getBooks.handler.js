const books = require('../books');

// eslint-disable-next-line no-unused-vars
module.exports = (request, h) => {
  let cleanBooks = books;
  let { name, reading, finished } = request.query;
  if (name !== undefined) {
    name = name.toLowerCase();
    cleanBooks = cleanBooks.filter((book) => book.name.toLowerCase().includes(name));
  }
  if (reading !== undefined) {
    reading = reading !== '0';
    cleanBooks = cleanBooks.filter(
      (book) => book.reading === reading,
    );
  }
  if (finished !== undefined) {
    finished = finished !== '0';
    cleanBooks = cleanBooks.filter(
      (book) => book.finished === finished,
    );
  }
  cleanBooks = cleanBooks.map(
    (book) => ({ id: book.id, name: book.name, publisher: book.publisher }),
  );
  return {
    status: 'success',
    data: {
      books: cleanBooks,
    },
  };
};
