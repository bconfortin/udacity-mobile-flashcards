import {AsyncStorage} from 'react-native'

const DECKS_STORAGE_KEY = 'UdacityMobileFlashcards:decks'
const CARDS_STORAGE_KEY = 'UdacityMobileFlashcards:cards'

export function fetchDecks() {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY, (error) => {
        console.log(error)
    })
        .then((results) => JSON.parse(results))
}

export function newDeck({key, deck}) {
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [key]: deck
    }))
}

export function removeDeck(key) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            data[key] = undefined
            delete data[key]
            AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
        })
}

export function clearDecksStorage() {
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify({}))
}

export function newCard({deckId, card}) {
    return AsyncStorage.getItem(CARDS_STORAGE_KEY)
        .then((results) => {
            let data = JSON.parse(results) || {}
            console.log(data)
            data = {
                ...data,
                [deckId]: {
                    ...data[deckId],
                    [card.id]: {
                        ...card
                    }
                }
            }
            console.log(data)
            AsyncStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(data))
        })
}
