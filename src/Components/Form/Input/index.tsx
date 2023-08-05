import React from "react"
import { TextInput, StyleSheet, View, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { Ionicons } from "@expo/vector-icons"

interface Props {
    placeholder: string;
    type: 'email' | "senha";
    handlePress?(): void;
    security: boolean;
    value: string;
    handleValue(e: string): void;
}

export function Input({ placeholder, type, handlePress, security, value, handleValue }: Props) {
    return (
        <View
            style={[
                styles.inputContainer,
                type === "senha" ? { flexDirection: "row", justifyContent: "space-between" } : null
            ]}
        >
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry={security}
                value={value}
                onChangeText={handleValue}
            />

            {type === "senha" &&
                <TouchableOpacity
                    style={styles.icon}
                    onPress={handlePress}
                >
                    {security === true ?
                        <Ionicons name="eye" size={26} />
                        :
                        <Ionicons name="eye-off" size={26} />
                    }
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        borderBottomWidth: 1.4,
        borderColor: "#26A03A",
        paddingHorizontal: 8,
        paddingVertical: 12
    },
    input: {
        fontSize: 18,
    },
    icon: {
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    }
})