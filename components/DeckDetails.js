import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import Deck from './Deck'
import StyledButton from './StyledButton'
import {GREEN, INDIGO, RED, WHITE} from "../utils/colors";
import {fetchDecks, removeDeck} from "../utils/api";
import {receiveDecks} from "../actions/decks";

class DeckDetails extends Component {
    deleteDeck = (deck) => {
        const {dispatch, navigation} = this.props

        removeDeck(deck.name).then(() => {
            fetchDecks().then((decks) => {
                dispatch(receiveDecks(decks))
                navigation.goBack()
            })
        })
    }

    render() {
        const {decks, navigation} = this.props
        const {navigate} = this.props.navigation
        const name = navigation.getParam('name', null);

        if (decks && name && decks[name]) {
            return (
                <View style={styles.container}>
                    <Deck deck={decks[name]}/>
                    <StyledButton buttonText={'Add new card'} backgroundColor={GREEN}
                                  onPress={() => navigate('NewCard', {deck: decks[name]})}/>
                    {
                        decks[name].questions && decks[name].questions.length > 0 && (
                            <StyledButton buttonText={'Start quiz'} backgroundColor={INDIGO}
                                          onPress={() => navigate('Quiz', {deck: decks[name]})}/>
                        )
                    }
                    <StyledButton buttonText={'Delete deck'} backgroundColor={RED} styles={{alignSelf: 'flex-end'}}
                                  onPress={() => this.deleteDeck(decks[name])}/>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text>There are no decks to show.</Text>
                    <TouchableOpacity>
                        <Text>
                            New deck
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flex: 1,
    },
    card: {
        backgroundColor: WHITE,
        padding: 15,
        margin: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        borderRadius: 2,
        shadowRadius: 1,
        shadowOpacity: 0.3,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
            width: 0,
            height: 1
        },
    },
})

function mapStateToProps({decks}) {
    return decks
}

export default connect(mapStateToProps)(DeckDetails)
