import {GET_CARD_BY_ID} from './actionTypes'

function getCardById (id) {
    return {
        type: GET_CARD_BY_ID,
        id
    }
}

export {
    getCardById
}
