import {AsyncStorage} from 'react-native'

const DECKS_STORAGE_KEY = 'UdacityMobileFlashcards:decks'

/**
 * @description Function to get all decks from the smartphone's local storage.
 * @returns {*|PromiseLike<T | never>|Promise<T | never>}
 */
export function fetchDecks() {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results) => JSON.parse(results))
}

/**
 * @description Function to create a new deck and add it to the smartphone's local storage.
 * @param key
 * @param deck
 * @returns {*}
 */
export function newDeck({key, deck}) {
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [key]: deck
    }))
}

/**
 * @description Function to remove a deck and save those changes to the smartphone's local storage.
 * @param key
 * @returns {*|PromiseLike<T | never>|Promise<T | never>}
 */
export function removeDeck(key) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results) => {
        const data = JSON.parse(results)
        data[key] = undefined
        delete data[key]
        AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
    })
}

/**
 * @description Dev function to clear the deck's local storage.
 */
export function clearDecksStorage() {
    AsyncStorage.clear()
}

/**
 * @decription Function to add a new card to a deck and save those changes to the smartphone's local storage.
 * @param deckName
 * @param card
 * @returns {*|PromiseLike<T | never>|Promise<T | never>}
 */
export function newCard({deckName, card}) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results) => {
        let data = JSON.parse(results) || {}
        data = {
            ...data,
            [deckName]: {
                ...data[deckName],
                questions: [
                    ...data[deckName].questions,
                    card
                ]
            }
        }
        AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
    })
}
