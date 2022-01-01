const getBook = require('../handlers/getBook.handler');

module.exports = {
  method: 'GET',
  path: '/books/{bookId}',
  config: {
    cors: true,
    security: true,
  },
  handler: getBook,
};
