/* exported View */
const View = (() => {
  const showErrorMessage = message => {
    const errorMessageElement = document.getElementById('error-message')
    errorMessageElement.innerText = message
  }

  const hideErrorMessage = () => showErrorMessage('')

  return Object.freeze({ showErrorMessage, hideErrorMessage })
})()
