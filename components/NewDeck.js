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
        const key = generateUID()
        const deck = {
            name: this.state.name,
            id: key
        }

        if (!deck.name) {
            return this.alertForInvalidSubmit()
        }

        this.props.dispatch(createDeck({
            [key]: deck
        }))

        this.setState(() => ({ name: '' }))

        newDeck({ key, deck })

        toHome(this.props.navigation.navigate)
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
