import {CREATE_DECK, RECEIVE_DECKS} from "../actions/actionTypes";

export default function decks (state = {}, action) {
    switch(action.type) {
        case CREATE_DECK:
            return {
                ...state,
                decks: {
                    ...state.decks,
                    ...action.deck
                }
            }
        case RECEIVE_DECKS:
            return {
                ...state,
                decks: {
                    ...state.decks,
                    ...action.decks
                }
            }
        default:
            return state
    }
}