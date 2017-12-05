'use strict'
const showBooks = require('../templates/show-books.handlebars')

const getBooksSuccess = (data) => {
  const onShowBooks = showBooks({ notes: data.books })
  $('#show-books').empty()
  $('#show-books').append(onShowBooks)
  $('#message').text('Books retrieved succesfully!')
}

const getBooksFailure = function (data) {
  $('#message').text('Failed to retrieve books!')
}

module.export = {
  getBooksSuccess,
  getBooksFailure,
  showBooks
}
