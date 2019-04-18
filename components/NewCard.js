import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {generateUID, toHome} from "../utils/helpers";
import {fetchDecks, newCard} from "../utils/api";
import {receiveDecks} from "../actions/decks";

class NewCard extends Component {
    state = {
        question: '',
        answer: ''
    }

    submit = () => {
        const {navigation, dispatch} = this.props
        const {navigate} = this.props.navigation
        const deckName = navigation.getParam('deckName', null)
        const key = generateUID()
        const card = {
            id: key,
            question: this.state.question,
            answer: this.state.answer,
        }

        if (!card.question || !card.answer) {
            return this.alertForInvalidSubmit()
        }

        newCard({deckName, card}).then(() => {
            fetchDecks().then((decks) => {
                dispatch(receiveDecks(decks))
            })
        })

        this.setState(() => ({
            question: '',
            answer: ''
        }))

        toHome(navigate)
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

        return (
            <View>
                <Text>NewCard</Text>
                <TextInput onChangeText={(question) => this.setState({question})}
                           value={this.state.question}></TextInput>
                <TextInput onChangeText={(answer) => this.setState({answer})} value={this.state.answer}></TextInput>
                <TouchableOpacity onPress={() => this.submit()}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

export default connect()(NewCard)
