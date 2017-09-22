import React from 'react'
import { Button } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
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
            name={focused ? 'book-open' : 'book'}
            size={30}
            type="material-community"
            color={tintColor}
          />
        ),
      },
    },
    FictionBooksTab: {
      screen: FictionBooksScreen,
      navigationOptions: {
        tabBarLabel: 'Fiction',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name="clapperboard" size={30} type="entypo" color={tintColor} />
        ),
      },
    },
    NonFictionBooksTab: {
      screen: NonFictionBooksScreen,
      navigationOptions: {
        tabBarLabel: 'Nonfiction',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name="book" size={30} type="font-awesome" color={tintColor} />
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
