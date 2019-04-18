import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text, TouchableOpacity} from 'react-native'

class DeckDetails extends Component {
    render () {
        const {decks, navigation} = this.props
        const {navigate} = this.props.navigation
        const name = navigation.getParam('name', null);

        if (decks && name && decks[name]) {
            return (
                <View>
                    <Text>Deck</Text>
                    <Text>{JSON.stringify(decks[name])}</Text>
                    <TouchableOpacity onPress={() => navigate('NewCard', {deckName: name})}>
                        <Text>Add new card</Text>
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

function mapStateToProps ({decks}) {
    return decks
}

export default connect(mapStateToProps)(DeckDetails)
