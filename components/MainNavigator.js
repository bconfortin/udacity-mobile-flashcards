import {createAppContainer, createStackNavigator} from "react-navigation";
import Decks from './Decks'
import NewDeck from './NewDeck'
import NewCard from './NewCard'
import DeckDetails from "./DeckDetails";

const StackNavigator = createStackNavigator({
    Decks: {
        screen: Decks,
        navigationOptions: {
            headerTitle: 'Decks',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#000'
            }
        }
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
            headerTitle: 'Add a new deck',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#000'
            }
        }
    },
    DeckDetails: {
        screen: DeckDetails,
        navigationOptions: {
            headerTitle: 'Deck details',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#000'
            }
        }
    }
})

const MainNavigator = createAppContainer(StackNavigator)

export default MainNavigator