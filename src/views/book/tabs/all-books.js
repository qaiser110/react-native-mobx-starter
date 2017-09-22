import React from 'react'
import { Container } from 'native-base'
import Title from '../../../components/Title'
import BookListView from '../components/BookListView'
import styles from "./styles";

const AllBooks = ({ navigation }) => (
  <Container style={styles.container}>
    <Title text="All Books" />
    <BookListView filter="All" />
  </Container>
)

export default AllBooks
