import React from "react"
import { TextInput, StyleSheet, View, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { Ionicons } from "@expo/vector-icons"

interface Props {
    placeholder: string;
    type: 'email' | "senha" | "text";
    handlePress?(): void;
    security: boolean;
    value: string;
    handleValue(e: string): void;
    keyboard: any;
    editable: boolean;
}

export function Input({
    placeholder,
    type,
    handlePress,
    security,
    value,
    handleValue,
    editable,
    keyboard
}: Props) {
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
                keyboardType={keyboard}
                editable={editable}
            />

            {type === "senha" &&
                <TouchableOpacity
                    style={styles.icon}
                    onPress={handlePress}
                >
                    {security === false ?
                        <Ionicons name="eye-off" color="rgba(38, 160, 58, 0.5)" size={26} />
                        :
                        <Ionicons name="eye" color="rgba(38, 160, 58, 0.5)" size={26} />
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