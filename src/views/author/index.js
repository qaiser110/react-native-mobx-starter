import React from 'react'
import { Text, View, Button } from 'react-native'
import Title from '../../components/Title'

const AuthorView = ({ navigation }) => (
  <View>
    <Title text="Authors"/>
    <Button
      onPress={() => navigation.navigate('DrawerOpen')}
      title="Open Drawer"
    />
  </View>
)

export default AuthorView
