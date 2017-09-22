import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { observer } from 'mobx-react'
import Title from '../../components/Title'
import { AuthorStore } from './store'

const Author = observer(({ author }) => <Text>{author.name}</Text>)

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
        {this.store.authors
          .values()
          .map(author => <Author key={author.id} author={author} />)}
      </View>
    )
  }
}

const AuthorListView = ({ navigation }) => (
  <View>
    <Title text="Authors" />
    <Button
      onPress={() => navigation.navigate('DrawerOpen')}
      title="Open Drawer"
    />
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
