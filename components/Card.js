import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Animated, Text, View, TouchableOpacity, StyleSheet} from 'react-native'
import {GRAY_CCC, GREEN, INDIGO, RED, WHITE} from "../utils/colors";
import StyledButton from './StyledButton'

class Card extends Component {
    // Card Flip animation taken from:
    // https://github.com/browniefed/examples/blob/animated_basic/flip/animatedbasic/index.ios.js

    componentWillMount() {
        this.animatedValue = new Animated.Value(0);
        this.value = 0;

        this.animatedValue.addListener(({value}) => {
            this.value = value;
        })

        this.frontInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg'],
        })

        this.backInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['180deg', '360deg']
        })
    }

    flipCard() {
        if (this.value >= 90) {
            Animated.spring(this.animatedValue, {
                toValue: 0,
                friction: 8,
                tension: 10
            }).start();
        } else {
            Animated.spring(this.animatedValue, {
                toValue: 180,
                friction: 8,
                tension: 10
            }).start();
        }
    }

    render() {
        const frontAnimatedStyle = {
            transform: [
                {rotateY: this.frontInterpolate}
            ]
        }

        const backAnimatedStyle = {
            transform: [
                {rotateY: this.backInterpolate}
            ]
        }

        const {question, answer} = this.props.card

        return (
            <View style={styles.container}>
                <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
                    <Text>{question}</Text>
                    <StyledButton style={{marginTop: 15}} buttonText={'See the answer'} backgroundColor={INDIGO}
                                  onPress={() => this.flipCard()}/>
                </Animated.View>
                <Animated.View style={[backAnimatedStyle, styles.flipCard, styles.flipCardBack]}>
                    <Text>{answer}</Text>
                    <TouchableOpacity onPress={() => this.flipCard()}>
                        <Text style={styles.textButton}>See the question again</Text>
                    </TouchableOpacity>
                    <Text>Were you right?</Text>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={[styles.button, styles.buttonWrongAnswer]} onPress={() => this.props.handleAnswer(false)}>
                            <Text style={styles.buttonText}>No</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.buttonCorrectAnswer]} onPress={() => this.props.handleAnswer(true)}>
                            <Text style={styles.buttonText}>Yes</Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    flipCard: {
        backfaceVisibility: 'hidden',
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
    },
    flipCardBack: {
    },
    textButton: {
        color: GRAY_CCC,
        marginTop: 15,
        marginBottom: 15,
        alignSelf: 'center'
    },
    buttonsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        padding: 15,
        flex: 0.5
    },
    buttonCorrectAnswer: {
        backgroundColor: RED
    },
    buttonWrongAnswer: {
        backgroundColor: GREEN
    },
    buttonText: {
        color: WHITE,
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: '700'
    }
});


export default connect()(Card)
