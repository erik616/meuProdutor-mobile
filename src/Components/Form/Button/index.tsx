import React from "react"
import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from "react-native"

interface Prosp extends TouchableOpacityProps {
    placeholder: string;
    type: "singin" | "singup";
    handlePress(): void;
    disable: boolean
}

export function Button({ placeholder, type, handlePress, disable }: Prosp) {
    return (
        <TouchableOpacity
            style={[styles.container,
            type === "singup" ? { backgroundColor: "#fff", borderColor: "#26A03A", borderWidth: 1.4, }
                : { backgroundColor: "#26A03A", }
            ]}
            onPress={handlePress}
            disabled={disable}
        >
            <Text style={[styles.text, type === "singup" ? { color: "#26A03A" } : null]}>{placeholder}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "48%",
        marginVertical: 8,
        paddingHorizontal: 8,
        paddingVertical: 12,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6
    },
    text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700"
    }
})