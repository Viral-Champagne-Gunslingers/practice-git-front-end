const api = require('./api')
const ui = require('./ui')
const getFormFields = require(`../../../lib/get-form-fields`)

const onShowBooks = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.getNote(data)
    .then(ui.showBooksSuccess)
    .catch(ui.getBooksFailure)
}

const addHandlers = function (event) {
  $('.btn-primary').on('submit', onShowBooks)
}

module.export = {
  onShowBooks,
  addHandlers
}
