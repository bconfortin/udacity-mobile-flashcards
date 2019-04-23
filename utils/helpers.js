/**
 * @description Function to generate a unique identifier.
 * @returns {string}
 */
const generateUID = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

/**
 * @description Function to navigate to the 'Decks' screen on the stack navigator.
 * @param navigate
 */
const toHome = (navigate) => {
    if (navigate) {
        navigate('Decks')
    }
}


export {
    generateUID,
    toHome,
}