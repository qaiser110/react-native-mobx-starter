import { types, process, getEnv } from 'mobx-state-tree'
import api from './__mocks__/api'

export const Author = types.model('Author', {
  id: types.identifier(types.number),
  name: types.string,
  gender: types.enumeration('Gender', ['Male', 'Female']),
})

export const AuthorStore = types
  .model('AuthorStore', {
    isLoading: true,
    authors: types.map(Author),
  })
  .views(self => ({
    get api() {
      return getEnv(self) && getEnv(self).api ? getEnv(self).api : api
    },
  }))
  .actions(self => {
    function markLoading(loading) {
      self.isLoading = loading
    }

    function updateAuthors(json) {
      json.forEach(authorJson => {
        self.authors.put(authorJson)
      })
    }

    const loadAuthors = process(function* loadAuthors() {
      try {
        const json = yield self.api.fetchAuthors('/authors')
        updateAuthors(json)
        markLoading(false)
      } catch (err) {
        console.error('Failed to load authors ', err)
      }
    })

    return {
      loadAuthors,
    }
  })
