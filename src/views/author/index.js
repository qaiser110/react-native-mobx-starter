import React from 'react'
import { Text, View, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Title from '../../components/Title'

const AuthorListView = ({ navigation }) => (
  <View>
    <Title text="Authors"/>
    <Button
      onPress={() => navigation.navigate('DrawerOpen')}
      title="Open Drawer"
    />
  </View>
)

const AuthorView = StackNavigator({
  HomeDrawer: {
    screen: AuthorListView,
    navigationOptions: ({ navigation }) => ({
      title: 'Authors List',
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('DrawerOpen')}
          title="Menu"
        />
      ),
    }),
  },
})


export default AuthorView
