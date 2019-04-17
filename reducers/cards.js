import {CREATE_AND_ADD_CARD_TO_DECK, GET_CARD_BY_ID} from "../actions/actionTypes";

export default function cards (state = {}, action) {
    switch(action.type) {
        case CREATE_AND_ADD_CARD_TO_DECK:
            return {
                ...state,
                cards: {
                    ...state.cards,
                    [action.deckId]: {
                        ...action.card
                    }
                }
            }
        case GET_CARD_BY_ID:
            return {
                ...state,
                cards: {
                    ...state.cards[action.id]
                }
            }
        default:
            return state
    }
}