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

module.export = {
  onShowBooks
}
