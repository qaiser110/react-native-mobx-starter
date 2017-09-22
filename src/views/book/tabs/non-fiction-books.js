import React from 'react'
import { Container } from 'native-base'
import Title from '../../../components/Title'
import BookListView from '../components/BookListView'
import styles from './styles'

const NonFictionBooks = ({ navigation }) => (
  <Container style={styles.container}>
    <Title text="Non-Fiction Books" />
    <BookListView filter="Nonfiction" />
  </Container>
)

export default NonFictionBooks
