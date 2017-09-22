import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { observer } from 'mobx-react'
import { BookStore } from '../store'

const Book = observer(({ book }) => <Text>{book.name}</Text>)

const BookList = observer(({ books }) => (
  <View>{books.map(book => <Book key={book.id} book={book} />)}</View>
))

@observer
class BookListView extends Component {
  store
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

export default observer(BookListView)
