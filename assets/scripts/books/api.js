const store = require('../store')
const config = require('../config')

const showBooks = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/notes/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.export = {
  showBooks
}
