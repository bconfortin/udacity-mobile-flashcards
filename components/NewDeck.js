import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native'
import {generateUID, toHome} from "../utils/helpers";
import {fetchDecks, newDeck} from "../utils/api";
import {createDeck} from "../actions/decks";

class NewDeck extends Component {
    state = {
        name: ''
    }

    submit = () => {
        const {navigate} = this.props.navigation
        const key = generateUID()
        const deck = {
            name: this.state.name,
            id: key,
            questions: []
        }

        if (!deck.name) {
            return this.alertForInvalidSubmit()
        }

        this.props.dispatch(createDeck({
            [this.state.name]: deck
        }))

        newDeck({ key: this.state.name, deck })

        this.setState(() => ({ name: '' }))

        toHome(navigate)
    }

    alertForInvalidSubmit = () => {
        Alert.alert(
            'Validation error',
            'It seems you sent an empty name for your deck. Please, choose a name for your deck.',
            [{text: 'OK', onPress: () => {}}],
            {cancelable: true},
        );
    }

    render () {
        return (
            <View>
                <Text>NewDeck</Text>
                <TextInput onChangeText={(name) => this.setState({name})} value={this.state.name}></TextInput>
                <TouchableOpacity onPress={() => this.submit()}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

export default connect()(NewDeck)
