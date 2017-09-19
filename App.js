import React from 'react'
import { View } from 'react-native'
import { DrawerNavigator, DrawerItems } from 'react-navigation'

import BookView from './src/book'
import AuthorView from './src/author'

const DrawerComponent = props => (
  <View>
    <DrawerItems {...props} />
  </View>
)

const App = DrawerNavigator(
  {
    Books: {
      screen: BookView,
    },
    Authors: {
      screen: AuthorView,
    },
  },
  {
    initialRouteName: 'Books',
    drawerWidth: 200,
    drawerPosition: 'left',
    contentComponent: DrawerComponent,
  }
)

export default App
