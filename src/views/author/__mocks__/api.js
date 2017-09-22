export default {
  fetchAuthors() {
    return Promise.resolve(require('./authors.json'))
  },
}
