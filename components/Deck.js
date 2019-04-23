import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {withNavigation} from 'react-navigation'
import {GRAY_666, WHITE} from "../utils/colors";

class Deck extends Component {
    render() {
        const {deck} = this.props
        const {navigate} = this.props.navigation

        if (deck) {
            const numberOfCards = deck.questions.length
            let cardOrCards = 'cards'
            if (numberOfCards === 1) {
                cardOrCards = 'card'
            }

            return (
                <TouchableOpacity style={styles.card} onPress={() => navigate('DeckDetails', {name: deck.name})}>
                    <Text style={styles.name}>{deck.name}</Text>
                    <Text style={styles.numberOfQuestions}>{`${numberOfCards} ${cardOrCards}`}</Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={styles.card}>
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

const styles = StyleSheet.create({
    card: {
        backgroundColor: WHITE,
        padding: 15,
        marginRight: 15,
        marginLeft: 15,
        height: 150,
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
        marginBottom: 15
    },
    name: {
        fontSize: 24,
        marginBottom: 10,
    },
    numberOfQuestions: {
        fontSize: 18,
        fontWeight: '300',
        color: GRAY_666
    },
})

export default withNavigation(connect()(Deck))
