import React from 'react'
import { TabNavigator } from 'react-navigation'
import FictionBooksScreen from './fiction-books'
import NonFictionBooksScreen from './non-fiction-books'

const BookView = TabNavigator(
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

export default BookView
