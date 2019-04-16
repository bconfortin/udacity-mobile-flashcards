import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text} from 'react-native'

class Card extends Component {
    render () {
        return (
            <View>
                <Text>Card</Text>
            </View>
        )
    }

}

export default connect()(Card)
