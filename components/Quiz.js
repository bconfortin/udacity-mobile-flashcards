import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text} from 'react-native'

class Quiz extends Component {
    render () {
        return (
            <View>
                <Text>Quiz</Text>
            </View>
        )
    }

}

export default connect()(Quiz)
