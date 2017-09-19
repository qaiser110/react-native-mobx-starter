import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { DrawerNavigator, DrawerItems } from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    padding: 20,
    marginTop: 20,
    fontSize: 20,
    color: '#fff',
    backgroundColor: '#434343',
  },
})

const BookView = ({ navigation }) => (
  <View>
    <Text style={styles.header}>Books</Text>
    <Button
      onPress={() => navigation.navigate('DrawerOpen')}
      title="Open Drawer"
    />
  </View>
)

const AuthorView = ({ navigation }) => (
  <View>
    <Text style={styles.header}>Authors</Text>
    <Button
      onPress={() => navigation.navigate('DrawerOpen')}
      title="Open Drawer"
    />
  </View>
)

const DrawerComponent = props => (
  <View>
    <DrawerItems {...props} />
  </View>
)

const App = DrawerNavigator(
  {
    Books: {
      screen: BookView,
    },
    Authors: {
      screen: AuthorView,
    },
  },
  {
    initialRouteName: 'Books',
    drawerWidth: 200,
    drawerPosition: 'left',
    contentComponent: DrawerComponent,
  }
)

export default App
