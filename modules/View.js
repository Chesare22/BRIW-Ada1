/* exported View */
const View = (() => {
  const showErrorMessage = message => {
    const errorMessageElement = document.getElementById('error-message')
    errorMessageElement.innerText = message
  }


  const hideErrorMessage = () => showErrorMessage('')


  const articleToHtmlElement = ({ title, pageid, snippet }) => {
    const titleElement = document.createElement('a')
    titleElement.setAttribute('href', `https://es.wikipedia.org/?curid=${pageid}`)
    titleElement.setAttribute('class', 'article-title')
    titleElement.innerText = title

    const snippetElement = document.createElement('p')
    snippetElement.setAttribute('class', 'article-snippet')
    snippetElement.innerHTML = snippet

    const containerElement = document.createElement('div')
    containerElement.appendChild(titleElement)
    containerElement.appendChild(snippetElement)
    return containerElement
  }


  const showArticles = articles => {
    const articleElements = articles.map(articleToHtmlElement)
    const articlesContainerElement = document.getElementById('articles')
    articlesContainerElement.replaceChildren(...articleElements)
  }


  return Object.freeze({
    showErrorMessage,
    hideErrorMessage,
    showArticles,
  })
})()
