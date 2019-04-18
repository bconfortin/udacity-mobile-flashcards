import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Text, TouchableOpacity, View} from 'react-native'
import Deck from './Deck'
import {fetchDecks} from "../utils/api";
import {receiveDecks} from "../actions/decks";

class Decks extends Component {
    componentDidMount() {
        const {dispatch} = this.props

        fetchDecks().then((decks) => {
            dispatch(receiveDecks(decks))
        })
    }

    render() {
        const {navigate} = this.props.navigation
        const {decks} = this.props

        return (
            <View>
                <Text>Decks</Text>
                {
                    decks &&
                    Object.keys(decks).map((deck) => <Deck deck={decks[deck]} key={decks[deck].id}></Deck>)
                }
                <TouchableOpacity onPress={() => navigate('NewDeck')}>
                    <Text>Create new deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapStateToProps({decks}) {
    return decks
}

export default connect(mapStateToProps)(Decks)
