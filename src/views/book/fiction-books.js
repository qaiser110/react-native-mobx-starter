import React from 'react'
import { View, Button } from 'react-native'
import Title from '../../components/Title'
import BookListView from './components/BookListView'

const FictionBooks = ({ navigation }) => (
  <View>
    <Title text="Fiction Books" />
    <BookListView filter="Fiction" />
  </View>
)

export default FictionBooks
