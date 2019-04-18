import {AsyncStorage} from 'react-native'

const DECKS_STORAGE_KEY = 'UdacityMobileFlashcards:decks'

export function fetchDecks() {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY, (error) => {
        console.log(error)
    }).then((results) => JSON.parse(results))
}

export function newDeck({key, deck}) {
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [key]: deck
    }))
}

export function removeDeck(key) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results) => {
        const data = JSON.parse(results)
        data[key] = undefined
        delete data[key]
        AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
    })
}

export function clearDecksStorage() {
    AsyncStorage.clear()
}

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
