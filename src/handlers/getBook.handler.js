const books = require('../books');

// eslint-disable-next-line no-unused-vars
module.exports = (request, h) => {
  const { bookId } = request.params;
  if (!bookId) {
    return h.response({
      status: 'fail',
      message: 'Buku tidak ditemukan',
    }).code(404);
  }
  const book = books.find((el) => el.id === bookId);
  if (!book) {
    return h.response({
      status: 'fail',
      message: 'Buku tidak ditemukan',
    }).code(404);
  }
  return {
    status: 'success',
    data: {
      book,
    },
  };
};
