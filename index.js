const Queries = (() => {
  const baseUrl = 'https://es.wikipedia.org/w/api.php'
  const baseParams = Object.freeze({
    srlimit: '500',
    srqiprofile: 'classic',
    srinfo: 'totalhits',
    action: 'query',
    list: 'search',
    format: 'json',
    origin: '*',
    srprop: [
      'size',
      'timestamp',
      'snippet',
    ].join('|'),
  })

  const search = (srsearch, sroffset = 0) => {
    const params = new URLSearchParams({
      ...baseParams,
      srsearch,
      sroffset,
    })
    return fetch(`${baseUrl}?${params}`)
      .then(response => response.json())
  }

  return Object.freeze({ search })
})()


const Events = (() => {
  const onEnter = handler => event => {
    if (event.key === 'Enter') {
      handler(event)
    }
  }

  return Object.freeze({ onEnter })
})()


const View = (() => {
  const showErrorMessage = message => {
    const errorMessageElement = document.getElementById('error-message')
    errorMessageElement.innerText = message
  }

  const hideErrorMessage = () => showErrorMessage('')

  return Object.freeze({ showErrorMessage, hideErrorMessage })
})()


const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')


const searchEventListener = () => {
  const searchedValue = searchInput.value
  if (searchedValue === '') {
    View.showErrorMessage('La búsqueda no puede ser vacía')
    return
  } else {
    View.hideErrorMessage()
  }

  Queries.search(searchedValue).then(console.log)
}

searchButton.addEventListener('click', searchEventListener)
searchInput.addEventListener('keyup', Events.onEnter(searchEventListener))
