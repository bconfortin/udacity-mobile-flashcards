import {GET_CARD_BY_ID} from "../actions/actionTypes";

export default function cards (state = {}, action) {
    switch(action.type) {
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