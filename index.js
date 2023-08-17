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


const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')


searchButton.addEventListener('click', () => {
  Queries.search(searchInput.value).then(console.log)
})
