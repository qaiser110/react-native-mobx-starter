import React from 'react'
import { View } from 'react-native'
import Title from '../../../components/Title'
import BookListView from '../components/BookListView'

const NonFictionBooks = ({ navigation }) => (
  <View>
    <Title text="Non-Fiction Books" />
    <BookListView filter="Nonfiction" />
  </View>
)

export default NonFictionBooks
