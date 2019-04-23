import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {GRAY_666, INDIGO, RED, WHITE} from '../utils/colors'
import StyledButton from './StyledButton'
import {withNavigation} from 'react-navigation'

function QuizScore(props) {
    const {correctAnswers, totalQuestions, navigation} = props

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                {
                    correctAnswers === totalQuestions &&
                    <Text style={[styles.scoreText, {marginBottom: 15}]}>You aced it!</Text>
                }
                {
                    correctAnswers === 0 &&
                    <Text style={[styles.scoreText, {marginBottom: 15, color: RED}]}>Oh no!</Text>
                }
                <Text style={styles.text}>Your score:</Text>
                <Text style={styles.scoreText}>{correctAnswers}/{totalQuestions}</Text>
                <StyledButton style={{marginBottom: 0}} buttonText={'Go back'} backgroundColor={INDIGO}
                              onPress={() => navigation.goBack()}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
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
    text: {
        fontSize: 16,
        fontWeight: '300',
        color: GRAY_666,
        marginBottom: 15
    },
    scoreText: {
        fontSize: 30,
        fontWeight: '700',
        color: INDIGO,
        marginBottom: 15
    }
})

export default withNavigation(QuizScore)
