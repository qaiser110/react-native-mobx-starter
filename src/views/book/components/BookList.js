import React from 'react'
import { observer } from 'mobx-react'
import {
  Content,
  Button,
  List,
  ListItem,
  Text,
  Icon,
  Left,
  Right,
} from 'native-base'

export default observer(({ books }) => (
  <Content>
    <List
      dataArray={books}
      renderRow={book => (
        <ListItem>
          <Text>{book.name}</Text>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
      )}
    />
  </Content>
))
