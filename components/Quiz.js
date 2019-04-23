import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, View} from 'react-native'
import Card from './Card'
import QuizScore from "./QuizScore";

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            finishedQuiz: false,
            currentQuestion: 0,
            correctAnswers: 0
        }
    }

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
    }

    getDeck = () => {
        const {navigation} = this.props
        return navigation.getParam('deck', null)
    }

    restartQuiz = () => {
        this.setState((state) => ({
            finishedQuiz: false,
            currentQuestion: 0,
            correctAnswers: 0
        }))
    }

    render() {
        const deck = this.getDeck()

        if (this.state.finishedQuiz) {
            return (
                <QuizScore correctAnswers={this.state.correctAnswers} totalQuestions={deck.questions.length} restartQuiz={() => this.restartQuiz()}/>
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
