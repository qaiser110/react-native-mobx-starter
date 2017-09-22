import React from 'react'
import { Button } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Icon } from 'native-base'
import AllBooksScreen from './tabs/all-books'
import FictionBooksScreen from './tabs/fiction-books'
import NonFictionBooksScreen from './tabs/non-fiction-books'

const BookListView = TabNavigator(
  {
    AllBooksTab: {
      screen: AllBooksScreen,
      navigationOptions: {
        headerMode: 'none',
        tabBarLabel: 'All Books',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            android="md-book"
            ios={focused ? 'ios-book' : 'ios-book-outline'}
            style={{ fontSize: 20, color: tintColor }}
          />
        ),
      },
    },
    FictionBooksTab: {
      screen: FictionBooksScreen,
      navigationOptions: {
        tabBarLabel: 'Fiction',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            android="md-ionitron"
            ios={focused ? 'ios-ionitron' : 'ios-ionitron-outline'}
            name="md-menu"
            style={{ fontSize: 20, color: tintColor }}
          />
        ),
      },
    },
    NonFictionBooksTab: {
      screen: NonFictionBooksScreen,
      navigationOptions: {
        tabBarLabel: 'Nonfiction',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            android="md-planet"
            ios={focused ? 'ios-planet' : 'ios-planet-outline'}
            name="md-menu"
            style={{ fontSize: 20, color: tintColor }}
          />
        ),
      },
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
