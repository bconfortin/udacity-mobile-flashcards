import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Alert, StyleSheet, TextInput, Text, KeyboardAvoidingView} from 'react-native'
import {generateUID, toHome} from '../utils/helpers'
import {fetchDecks, newCard} from '../utils/api'
import {receiveDecks} from '../actions/decks'
import {GRAY_666, GRAY_EEE, GREEN, WHITE} from '../utils/colors'
import StyledButton from './StyledButton'

class NewCard extends Component {
    state = {
        question: '',
        answer: ''
    }

    submit = () => {
        const {navigation, dispatch} = this.props
        const deck = navigation.getParam('deck', null)
        const key = generateUID()
        const card = {
            id: key,
            question: this.state.question,
            answer: this.state.answer,
        }

        if (!card.question || !card.answer) {
            return this.alertForInvalidSubmit()
        }

        newCard({deckName: deck.name, card}).then(() => {
            fetchDecks().then((decks) => {
                dispatch(receiveDecks(decks))
            })
        })

        this.setState(() => ({
            question: '',
            answer: ''
        }))

        navigation.goBack()
    }

    alertForInvalidSubmit = () => {
        Alert.alert(
            'Validation error',
            'It seems you sent an empty question or answer for your card. Please, fill both the question and answer for your card.',
            [{
                text: 'OK', onPress: () => {
                }
            }],
            {cancelable: true},
        )
    }

    render() {
        const {navigation} = this.props
        const id = navigation.getParam('id', null)
        const deck = navigation.getParam('deck', null)

        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <Text style={styles.textLabel}>Question</Text>
                <TextInput style={styles.textInput} onChangeText={(question) => this.setState({question})}
                           value={this.state.question}
                           placeholder={'Write a Yes or No question'}></TextInput>
                <Text style={styles.textLabel}>Answer</Text>
                <TextInput style={styles.textInput} onChangeText={(answer) => this.setState({answer})}
                           value={this.state.answer}
                           placeholder={'Write the answer'}></TextInput>
                <StyledButton buttonText={'Create card'} backgroundColor={GREEN} onPress={() => this.submit()}/>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flex: 1,
    },
    textInput: {
        borderWidth: 1,
        borderColor: GRAY_EEE,
        padding: 15,
        backgroundColor: WHITE,
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 15
    },
    textLabel: {
        color: GRAY_666,
        fontWeight: '300',
        fontSize: 12,
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 5
    }
})

export default connect()(NewCard)
