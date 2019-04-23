import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ScrollView, StyleSheet, Text, View} from 'react-native'
import Deck from './Deck'
import {fetchDecks} from "../utils/api";
import {receiveDecks} from "../actions/decks";
import StyledButton from './StyledButton'
import {GREEN, WHITE} from "../utils/colors";

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
                <StyledButton backgroundColor={GREEN} buttonText={'Create new deck'}
                              onPress={() => navigate('NewDeck')}/>
                {
                    decks &&
                    Object.keys(decks).map((deck) => <Deck deck={decks[deck]} key={decks[deck].id}></Deck>)
                }
                {
                    decks && !Object.keys(decks).length && (
                        <View style={styles.card}>
                            <Text>There are no decks yet.</Text>
                        </View>
                    )
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flex: 1
    },
    card: {
        backgroundColor: WHITE,
        padding: 15,
        marginRight: 15,
        marginLeft: 15,
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
        }
    },
})

function mapStateToProps({decks}) {
    return decks
}

export default connect(mapStateToProps)(Decks)
