const putBook = require('../handlers/putBook.handler');

module.exports = {
  method: 'PUT',
  path: '/books/{bookId}',
  config: {
    cors: true,
    security: true,
  },
  handler: putBook,
};
