import React from 'react'
import { Text, View, Button } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import FictionBooksScreen from './fiction-books'
import NonFictionBooksScreen from './non-fiction-books'

const BookListView = TabNavigator(
  {
    FictionBooksTab: {
      screen: FictionBooksScreen,
    },
    NonFictionBooksTab: {
      screen: NonFictionBooksScreen,
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  }
)

const BookView = StackNavigator({
  HomeDrawer: {
    screen: BookListView,
    navigationOptions: ({ navigation }) => ({
      title: 'Book List',
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('DrawerOpen')}
          title="Menu"
        />
      ),
    }),
  },
})

export default BookView
