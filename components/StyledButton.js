import React, {Component} from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'
import {WHITE} from "../utils/colors";

function StyledButton (props) {
    return (
        <TouchableOpacity style={[styles.buttonStyle, {backgroundColor: props.backgroundColor}]} onPress={props.onPress}>
            <Text style={styles.buttonTextStyle}>{props.buttonText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        paddingTop: 15,
        paddingBottom: 15,
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 15
    },
    buttonTextStyle: {
        color: WHITE,
        textTransform: 'uppercase',
        fontWeight: '700',
        textAlign: 'center'
    }
})

export default StyledButton