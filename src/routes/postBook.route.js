const postBook = require('../handlers/postBook.handler');

module.exports = {
  method: 'POST',
  path: '/books',
  config: {
    cors: true,
    security: true,
  },
  handler: postBook,
};
