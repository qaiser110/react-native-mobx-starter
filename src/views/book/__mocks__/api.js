export default {
  fetchBooks() {
    return Promise.resolve(require('./books.json'))
  },
}
