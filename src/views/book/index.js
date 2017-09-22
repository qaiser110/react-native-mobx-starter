import React from 'react'
import { Button } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import AllBooksScreen from './tabs/all-books'
import FictionBooksScreen from './tabs/fiction-books'
import NonFictionBooksScreen from './tabs/non-fiction-books'

const BookListView = TabNavigator(
  {
    AllBooksTab: {
      screen: AllBooksScreen,
    },
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
