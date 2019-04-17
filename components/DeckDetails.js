import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text, TouchableOpacity} from 'react-native'

class DeckDetails extends Component {
    render () {
        const {decks, navigation} = this.props
        const {navigate} = this.props.navigation
        const id = navigation.getParam('id', null);

        if (decks && id && decks[id]) {
            return (
                <View>
                    <Text>Deck</Text>
                    <Text>{JSON.stringify(decks[id])}</Text>
                    <TouchableOpacity onPress={() => navigate('NewCard', {deckId: id})}>
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