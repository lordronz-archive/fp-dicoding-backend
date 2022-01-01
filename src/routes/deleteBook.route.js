const deleteBook = require('../handlers/deleteBook.handler');

module.exports = {
  method: 'DELETE',
  path: '/books/{bookId}',
  config: {
    cors: true,
    security: true,
  },
  handler: deleteBook,
};
