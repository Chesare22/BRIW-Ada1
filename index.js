/* global View:readonly Queries:readonly Events:readonly */

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

  Queries.search(searchedValue)
    .then(({ query }) => {
      const articlesOfFirstPage = query.search.slice(0, 10)
      View.showArticles(articlesOfFirstPage)
    })
}

searchButton.addEventListener('click', searchEventListener)
searchInput.addEventListener('keyup', Events.onEnter(searchEventListener))
