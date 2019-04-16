import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import { StyleSheet, Text, View } from 'react-native'
import MainNavigator from './components/MainNavigator'

const store = createStore(reducer)

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <View style={{flex: 1}}>
            <MainNavigator/>
          </View>
        </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
