import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text} from 'react-native'

class NewCard extends Component {
    render () {
        return (
            <View>
                <Text>NewCard</Text>
            </View>
        )
    }

}

export default connect()(NewCard)
