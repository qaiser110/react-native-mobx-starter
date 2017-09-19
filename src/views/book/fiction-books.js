import React from 'react'
import { View, Button } from 'react-native'
import Title from '../../components/Title'

const FictionBooks = ({ navigation }) => (
  <View>
    <Title text="Fiction Books" />
    <Button
      onPress={() => navigation.navigate('DrawerOpen')}
      title="Open Drawer"
    />
    <Button
      onPress={() => navigation.navigate('NonFictionBooksTab')}
      title="Open Non-Fiction Books Tab"
    />
  </View>
)

export default FictionBooks
