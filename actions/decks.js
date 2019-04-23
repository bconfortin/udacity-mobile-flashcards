import {CREATE_DECK, RECEIVE_DECKS} from './actionTypes'

function createDeck(deck) {
    return {
        type: CREATE_DECK,
        deck
    }
}

function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

export {
    createDeck,
    receiveDecks,
}