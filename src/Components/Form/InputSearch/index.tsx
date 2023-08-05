import React from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"

interface Props {
    placeholder: string
}

export function InputSearch({ placeholder }: Props) {
    return (
        <View
            style={styles.container}
        >
            <TextInput
                style={styles.input}
                placeholder={placeholder}
            ></TextInput>
            <TouchableOpacity
                style={styles.button}
                activeOpacity={.8}
            >
                <Ionicons name='search' size={26} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 14,
        width: "90%",

        borderWidth: 1.6,
        borderColor: "#D9D9D9",
        borderRadius: 6,

        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input:{
        width:"80%",
        height: 40,
        paddingHorizontal: 12,
        paddingVertical: 4,
        fontSize: 16
    },
    button: {
        width:"20%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#D9D9D9"
    }
})