import {combineReducers} from "redux";
import decks from './decks'
import cards from './cards'

export default combineReducers({
    cards,
    decks
})