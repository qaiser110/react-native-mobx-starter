import { types, process, getEnv } from 'mobx-state-tree'

export const Book = types.model('Book', {
  id: types.identifier(),
  name: types.string,
  author: types.string,
  genre: types.string,
  inStock: types.boolean,
})

export const BookStore = types
  .model('BookStore', {
    isLoading: true,
    books: types.map(Book),
  })
  .views(self => ({
    get api() {
      return getEnv(self).api
    },
    booksByGenre(genre) {
      return self.books.values().filter(t => t.genre === genre)
    },
    get sortedAvailableBooks() {
      return sortBooks(self.books.values())
    },
  }))
  .actions(self => {
    function markLoading(loading) {
      self.isLoading = loading
    }

    function updateBooks(json) {
      json.forEach(bookJson => {
        self.books.put(bookJson)
      })
    }

    const loadBooks = process(function* loadBooks() {
      try {
        const json = yield self.api.fetchBooks('/books')
        updateBooks(json)
        markLoading(false)
      } catch (err) {
        console.error('Failed to load books ', err)
      }
    })

    return {
      loadBooks,
    }
  })

function sortBooks(books) {
  return books
    .filter(b => b.inStock)
    .sort((a, b) => (a.name > b.name ? 1 : a.name === b.name ? 0 : -1))
}
