import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Alert, KeyboardAvoidingView, StyleSheet, Text, TextInput} from 'react-native'
import {generateUID, toHome} from "../utils/helpers";
import {newDeck} from "../utils/api";
import {createDeck} from "../actions/decks";
import {GRAY_666, GRAY_EEE, GREEN, WHITE} from "../utils/colors";
import StyledButton from './StyledButton'

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

        newDeck({key: this.state.name, deck})

        this.setState(() => ({name: ''}))

        navigate('DeckDetails', {name: deck.name})
    }

    alertForInvalidSubmit = () => {
        Alert.alert(
            'Validation error',
            'It seems you sent an empty name for your deck. Please, choose a name for your deck.',
            [{
                text: 'OK', onPress: () => {
                }
            }],
            {cancelable: true},
        );
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Text style={styles.textLabel}>Deck name</Text>
                <TextInput style={styles.textInput} onChangeText={(name) => this.setState({name})}
                           value={this.state.name}
                           placeholder={'E.g.: Math test, history exam, etc'}></TextInput>
                <StyledButton buttonText={'Create deck'} backgroundColor={GREEN} onPress={() => this.submit()}/>
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

export default connect()(NewDeck)
