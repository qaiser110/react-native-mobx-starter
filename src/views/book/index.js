import React from 'react'
import { Text, View, Button } from 'react-native'
import Title from '../../components/Title'

const BookView = ({ navigation }) => (
  <View>
    <Title text="Books" />
    <Button
      onPress={() => navigation.navigate('DrawerOpen')}
      title="Open Drawer"
    />
  </View>
)

export default BookView
