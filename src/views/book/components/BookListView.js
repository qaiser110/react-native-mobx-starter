import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { BookStore } from '../store'
import BookList from './BookList'

@observer
class BookListView extends Component {
  async componentWillMount() {
    this.store = BookStore.create({ books: {} }, { api: null })
    await this.store.loadBooks()
  }

  render() {
    const { filter } = this.props
    this.store.setFilter(filter)
    return <BookList books={this.store.filteredBooks} />
  }
}

export default BookListView
