import { when } from 'mobx'
import { BookStore } from '../store'
import api from '../__mocks__/api'

it('bookstore fetches data', done => {
  const store = BookStore.create({ books: {} }, { api })
  store.loadBooks()
  when(
    () => store.isLoading === false,
    () => {
      expect(store.books.size).toBe(12)
      expect(store.books.get('978-0641723002').name).toBe('The Great Gatsby')
      done()
    }
  )
})

it('bookstore data is correct', done => {
  const expectedBooks = require('../__mocks__/books.json')
  const store = BookStore.create({ books: {} }, { api })
  store.loadBooks()
  when(
    () => store.isLoading === false,
    () => {
      expect(store.books.values()).toEqual(expectedBooks)
      done()
    }
  )
})

it('bookstore sorts data', done => {
  const store = BookStore.create({ books: {} }, { api })
  store.loadBooks()
  when(
    () => store.isLoading === false,
    () => {
      expect(store.sortedAvailableBooks.map(book => book.name)).toEqual([
        'Tender Is the Night',
        'The Art of Failure',
        'The Lightning Thief',
        'The Love of the Last Tycoon',
        'What the Dog Saw and Other Adventures',
      ])
      done()
    }
  )
})

it('bookstore gets books by genre', done => {
  const store = BookStore.create({ books: {} }, { api })
  store.loadBooks()
  when(
    () => store.isLoading === false,
    () => {
      expect(store.booksByGenre('Nonfiction').map(book => book.name)).toEqual([
        'The Immortal Life of Henrietta Lacks ',
        'Outliers: The Story of Success',
        'The Best American Science Writing 2011 ',
        'The Best American Science and Nature Writing ',
        'The Art of Failure',
        'What the Dog Saw and Other Adventures',
      ])
      done()
    }
  )
})
