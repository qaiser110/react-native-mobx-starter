import React from 'react'
import { View } from 'react-native'
import Title from '../../../components/Title'
import BookListView from '../components/BookListView'

const AllBooks = ({ navigation }) => (
  <View>
    <Title text="All Books" />
    <BookListView filter="All" />
  </View>
)

export default AllBooks
