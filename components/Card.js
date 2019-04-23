import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {GRAY_CCC, GREEN, RED, WHITE} from '../utils/colors'
import FlipCard from 'react-native-flip-card'

class Card extends Component {
    handleAnswer = (answer) => {
        this.props.handleAnswer(answer)
    }

    render() {
        const {question, answer} = this.props.card

        return (
            <View style={styles.container}>
                <FlipCard style={styles.card}
                          friction={6}
                          perspective={1000}
                          flipHorizontal={true}
                          flipVertical={false}
                          flip={false}
                          clickable={true}>
                    <View style={[styles.flipContainer]}>
                        <View>
                            <Text>{question}</Text>
                            <Text style={[styles.textButton, {marginTop: 15}]}>See the answer</Text>
                        </View>
                    </View>
                    <View style={[styles.flipContainer]}>
                        <View style={{
                            flex: 1,
                            alignSelf: 'center',
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text>{answer}</Text>
                            <Text style={styles.textButton}>See the question again</Text>
                            <Text style={{marginBottom: 15}}>Were you right?</Text>
                            <View style={styles.buttonsContainer}>
                                <TouchableOpacity style={[styles.button, styles.buttonWrongAnswer]}
                                                  onPress={() => this.handleAnswer(false)}>
                                    <Text style={styles.buttonText}>No</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.button, styles.buttonCorrectAnswer]}
                                                  onPress={() => this.handleAnswer(true)}>
                                    <Text style={styles.buttonText}>Yes</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </FlipCard>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        alignContent: 'stretch'
    },
    flipContainer: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
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
    textButton: {
        color: GRAY_CCC,
        marginTop: 15,
        marginBottom: 15,
        alignSelf: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
        alignContent: 'stretch'
    },
    button: {
        padding: 15,
        flex: 0.5
    },
    buttonCorrectAnswer: {
        backgroundColor: GREEN
    },
    buttonWrongAnswer: {
        backgroundColor: RED
    },
    buttonText: {
        color: WHITE,
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: '700'
    }
})


export default connect()(Card)
