import React from 'react'
import { Container } from 'native-base'
import Title from '../../../components/Title'
import BookListView from '../components/BookListView'
import styles from "./styles";

const FictionBooks = ({ navigation }) => (
  <Container style={styles.container}>
    <Title text="Fiction Books" />
    <BookListView filter="Fiction" />
  </Container>
)

export default FictionBooks
