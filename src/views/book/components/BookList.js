import React from 'react'
import { ScrollView } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import { observer } from 'mobx-react'

export default observer(({ books }) => (
  <ScrollView>
    {
      <List>
        {books.map(book => (
          <ListItem key={book.id} title={book.name} subtitle={book.author} />
        ))}
      </List>
    }
  </ScrollView>
))
