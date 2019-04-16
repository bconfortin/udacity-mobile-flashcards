import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text, TouchableOpacity} from 'react-native'
import { withNavigation } from 'react-navigation'

class Deck extends Component {
    render () {
        const {deck} = this.props
        const {navigate} = this.props.navigation

        if (deck) {
            return (
                <View>
                    <TouchableOpacity onPress={() => navigate('DeckDetails', {id: deck.id})}>
                        <Text>Deck</Text>
                        <Text>{JSON.stringify(deck)}</Text>
                    </TouchableOpacity>
                </View>
            )
        }

        return (
            <View>
                <Text>There are no decks to show.</Text>
                <TouchableOpacity>
                    <Text>
                        New deck
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default withNavigation(connect()(Deck))
