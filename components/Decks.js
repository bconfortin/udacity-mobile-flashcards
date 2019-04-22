import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, View, ScrollView} from 'react-native'
import Deck from './Deck'
import {fetchDecks} from "../utils/api";
import {receiveDecks} from "../actions/decks";
import StyledButton from './StyledButton'
import {GREEN} from "../utils/colors";
import Card from './Card'

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
            <ScrollView style={styles.container}>
                <StyledButton backgroundColor={GREEN} buttonText={'Create new deck'} onPress={() => navigate('NewDeck')}/>
                {
                    decks &&
                    Object.keys(decks).map((deck) => <Deck deck={decks[deck]} key={decks[deck].id}></Deck>)
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
    }
})

function mapStateToProps({decks}) {
    return decks
}


export default connect(mapStateToProps)(Decks)
