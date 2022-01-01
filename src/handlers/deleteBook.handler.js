const books = require('../books');

// eslint-disable-next-line no-unused-vars
module.exports = (request, h) => {
  const { bookId } = request.params;
  if (!bookId) {
    return h.response({
      status: 'fail',
      message: 'Buku gagal dihapus. Id tidak ditemukan',
    }).code(404);
  }
  const bookIndex = books.findIndex((el) => el.id === bookId);
  if (bookIndex === -1) {
    return h.response({
      status: 'fail',
      message: 'Buku gagal dihapus. Id tidak ditemukan',
    }).code(404);
  }

  books[bookIndex] = books[books.length - 1];
  books.pop();

  return {
    status: 'success',
    message: 'Buku berhasil dihapus',
  };
};
