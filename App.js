import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import {StyleSheet, View} from 'react-native'
import MainNavigator from './components/MainNavigator'
import {setLocalNotification} from './utils/helpers'

const store = createStore(reducer)

export default class App extends React.Component {
    componentDidMount() {
        setLocalNotification()
    }

    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <MainNavigator/>
                </View>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
