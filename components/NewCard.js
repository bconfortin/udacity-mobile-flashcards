import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text, Alert, TextInput, TouchableOpacity} from 'react-native'
import {generateUID, toHome} from "../utils/helpers";
import {newCard} from "../utils/api";
import {createAndAddCardToDeck} from "../actions/cards";

class NewCard extends Component {
    state = {
        question: '',
        answer: ''
    }

    submit = () => {
        const {navigation} = this.props
        const {navigate} = this.props.navigation
        const deckId = navigation.getParam('deckId', null)
        const key = generateUID()
        const card = {
            id: key,
            question: this.state.question,
            answer: this.state.answer,
        }

        if (!card.question || !card.answer) {
            return this.alertForInvalidSubmit()
        }

        this.props.dispatch(createAndAddCardToDeck({
            [key]: card
        }, deckId))

        this.setState(() => ({
            question: '',
            answer: ''
        }))

        newCard({ deckId, card })

        toHome(navigate)
    }

    alertForInvalidSubmit = () => {
        Alert.alert(
            'Validation error',
            'It seems you sent an empty question or answer for your card. Please, fill both the question and answer for your card.',
            [{text: 'OK', onPress: () => {}}],
            {cancelable: true},
        )
    }

    render () {
        const {navigation} = this.props
        const id = navigation.getParam('id', null)

        return (
            <View>
                <Text>NewCard</Text>
                <TextInput onChangeText={(question) => this.setState({question})} value={this.state.question}></TextInput>
                <TextInput onChangeText={(answer) => this.setState({answer})} value={this.state.answer}></TextInput>
                <TouchableOpacity onPress={() => this.submit()}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

export default connect()(NewCard)
