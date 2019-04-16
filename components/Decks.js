import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text, TouchableOpacity} from 'react-native'
import Deck from './Deck'
import {toNewDeck} from "../utils/helpers";
import {NavigationActions} from "react-navigation";
import {clearDecksStorage, fetchDecks} from "../utils/api";
import {receiveDecks} from "../actions/decks";

class Decks extends Component {
    componentDidMount() {
        const {dispatch} = this.props

        // Dev only
        // clearDecksStorage()

        fetchDecks()
            .then((decks) => {
                dispatch(receiveDecks(decks))
            })

    }

    render () {
        const {navigate} = this.props.navigation
        const {decks} = this.props

        return (
            <View>
                <Text>{JSON.stringify(this.props)}</Text>
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
