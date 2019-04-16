import {NavigationActions} from "react-navigation";

const generateUID = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

/**
 * Generic handleChange that works for every input and select
 * @param event Uses the event to extract the input value (what was typed/selected) and input name (e.g.: title)
 */
const handleChange = (event) => {
    const {value, name} = event.target

    this.setState({
        [name]: value
    })
}

const toHome = (navigate) => {
    if (navigate) {
        navigate('Decks')
    }
}

const toNewDeck = (navigate) => {
    if (navigate) {
        navigate('NewDeck')
    }
}

export {
    generateUID,
    handleChange,
    toHome,
    toNewDeck
}