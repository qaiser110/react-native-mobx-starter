import React from 'react'
import { View, Button } from 'react-native'
import Title from '../../components/Title'

const NonFictionBooks = ({ navigation }) => (
  <View>
    <Title text="Non-Fiction Books" />
    <Button
      onPress={() => navigation.navigate('DrawerOpen')}
      title="Open Drawer"
    />
    <Button
      onPress={() => navigation.navigate('FictionBooksTab')}
      title="Open Fiction Books Tab"
    />
  </View>
)

export default NonFictionBooks
