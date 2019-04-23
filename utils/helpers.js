import React from 'react'
import {Notifications, Permissions} from 'expo'
import {AsyncStorage, Platform} from 'react-native'

const NOTIFICATION_KEY = 'UdacityMobileFlashcards:notifications'

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

function clearLocalNotifications () {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createLocalNotification () {
    return {
        title: 'Study!',
        body: 'Don\'t forget to study today. Remember: practice makes perfect.',
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            vibrate: true,
            priority: 'high',
        }
    }
}

function setLocalNotification () {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (!data) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({status}) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()

                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(20)
                            tomorrow.setMinutes(0)

                            Notifications.scheduleLocalNotificationAsync(
                                createLocalNotification(),
                                {
                                    time: tomorrow,
                                    repeat: Platform.OS === 'android' ? 'day' : null,
                                }
                            )

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}

export {
    generateUID,
    toHome,
    clearLocalNotifications,
    createLocalNotification,
    setLocalNotification,
}