import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import Deck from './Deck'
import StyledButton from './StyledButton'
import {GREEN, INDIGO} from "../utils/colors";

class DeckDetails extends Component {
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
                    <StyledButton buttonText={'Start quiz'} backgroundColor={INDIGO}
                                  onPress={() => navigate('NewCard', {deck: decks[name]})}/>
                </View>
            )
        }

        return (
            <View>
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
    container: {
        marginTop: 15
    }
})

function mapStateToProps({decks}) {
    return decks
}

export default connect(mapStateToProps)(DeckDetails)
