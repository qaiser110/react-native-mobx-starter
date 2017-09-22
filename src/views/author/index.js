import React, { Component } from 'react'
import { View, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { List, ListItem } from 'react-native-elements'
import { observer } from 'mobx-react'
import { AuthorStore } from './store'

@observer
class AuthorList extends Component {
  store
  async componentWillMount() {
    this.store = AuthorStore.create({ authors: {} }, { api: null })
    await this.store.loadAuthors()
  }

  render() {
    return (
      <View>
        {
          <List>
            {this.store.authors
              .values()
              .map(author => <ListItem key={author.id} title={author.name} />)}
          </List>
        }
      </View>
    )
  }
}

const AuthorListView = ({ navigation }) => (
  <View>
    <AuthorList />
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
