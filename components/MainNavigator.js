import {createAppContainer, createStackNavigator} from "react-navigation";
import Decks from './Decks'
import NewDeck from './NewDeck'
import NewCard from './NewCard'
import DeckDetails from "./DeckDetails";
import {BLACK, GRAY_F5, WHITE} from "../utils/colors";
import Quiz from "./Quiz";

const StackNavigator = createStackNavigator({
    Decks: {
        screen: Decks,
        navigationOptions: {
            headerTitle: 'Decks',
            headerTintColor: WHITE,
            headerStyle: {
                backgroundColor: BLACK
            }
        }
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
            headerTitle: 'Add a new deck',
            headerTintColor: WHITE,
            headerStyle: {
                backgroundColor: BLACK
            }
        }
    },
    DeckDetails: {
        screen: DeckDetails,
        navigationOptions: {
            headerTitle: 'Deck details',
            headerTintColor: WHITE,
            headerStyle: {
                backgroundColor: BLACK
            }
        }
    },
    NewCard: {
        screen: NewCard,
        navigationOptions: {
            headerTitle: 'New card',
            headerTintColor: WHITE,
            headerStyle: {
                backgroundColor: BLACK
            }
        }
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            headerTitle: 'Quiz',
            headerTintColor: WHITE,
            headerStyle: {
                backgroundColor: BLACK
            }
        }
    }
}, {
    cardStyle: {
        backgroundColor: GRAY_F5
    }
})

const MainNavigator = createAppContainer(StackNavigator)

export default MainNavigator