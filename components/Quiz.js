import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text, StyleSheet} from 'react-native'
import Card from './Card'

class Quiz extends Component {
    handleAnswer = async (answer) => {
        if (answer) {
            await this.setState((state) => ({
                ...state,
                correctAnswers: state.correctAnswers + 1
            }))
        }

        await this.nextQuestion()
    }

    nextQuestion = async () => {
        console.log('nextQuestion')
        console.log(this.state)
        const deck = this.getDeck()

        if ((this.state.currentQuestion + 1) >= deck.questions.length) {
            await this.setState((state) => ({
                ...state,
                finishedQuiz: true
            }))
        } else {
            await this.setState((state) => ({
                ...state,
                currentQuestion: state.currentQuestion + 1
            }))
        }
        console.log(this.state)

    }

    score = () => {
        const deck = this.getDeck()

        return <Text>{this.state.correctAnswers}/{deck.questions.length}</Text>
    }

    getDeck = () => {
        const {navigation} = this.props
        return navigation.getParam('deck', null)
    }

    render () {
        this.state = {
            finishedQuiz: false,
            currentQuestion: 0,
            correctAnswers: 0
        }

        const deck = this.getDeck()

        if (this.state.finishedQuiz) {
            return (
                <View>
                    <Text>Finished</Text>
                    {this.score()}
                </View>
            )
        }

        return (
            <View style={styles.container}>
                {
                    deck && deck.questions && deck.questions.length > 0 &&
                    <Card card={deck.questions[this.state.currentQuestion]} handleAnswer={this.handleAnswer}></Card>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default connect()(Quiz)
