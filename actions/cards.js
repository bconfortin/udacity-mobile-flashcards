import {CREATE_AND_ADD_CARD_TO_DECK, GET_CARD_BY_ID} from './actionTypes'

function createAndAddCardToDeck (card, deckId) {
    return {
        type: CREATE_AND_ADD_CARD_TO_DECK,
        card,
        deckId
    }
}

function getCardById (id) {
    return {
        type: GET_CARD_BY_ID,
        id
    }
}

export {
    createAndAddCardToDeck,
    getCardById
}
