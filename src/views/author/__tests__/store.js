import * as fs from 'fs'
import { when } from 'mobx'
import { getSnapshot } from 'mobx-state-tree'
import { AuthorStore } from '../store'

const api = {
  fetchAuthors() {
    return Promise.resolve(
      JSON.parse(fs.readFileSync(`${__dirname}/../__mocks__/authors.json`))
    )
  },
}

it('store.authors.values() data is correct', done => {
  const store = AuthorStore.create({ authors: {} }, { api })
  store.loadAuthors()
  when(
    () => store.isLoading === false,
    () => {
      expect(store.authors.values()).toMatchSnapshot()
      done()
    }
  )
})

it('author getSnapshot(store) data is correct', done => {
  const store = AuthorStore.create({ authors: {} }, { api })
  store.loadAuthors()
  when(
    () => store.isLoading === false,
    () => {
      expect(getSnapshot(store)).toMatchSnapshot()
      done()
    }
  )
})
