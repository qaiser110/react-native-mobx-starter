import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    padding: 20,
    marginTop: 20,
    fontSize: 20,
    color: '#fff',
    backgroundColor: '#434343',
  },
})

const AuthorView = ({ navigation }) => (
  <View>
    <Text style={styles.header}>Authors</Text>
    <Button
      onPress={() => navigation.navigate('DrawerOpen')}
      title="Open Drawer"
    />
  </View>
)

export default AuthorView
