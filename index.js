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


const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')


const searchEventListener = () => {
  Queries.search(searchInput.value).then(console.log)
}

searchButton.addEventListener('click', searchEventListener)
searchInput.addEventListener('keyup', Events.onEnter(searchEventListener))
