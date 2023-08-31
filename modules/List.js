/* exported List */
const List = (() => {
  const sortBy = key => array =>
    array.sort((elementA, elementB) => elementA[key] - elementB[key])


  const map = fun => arr =>
    arr.map(fun)


  return Object.freeze({
    sortBy,
    map,
  })
})()
