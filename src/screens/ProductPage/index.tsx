import React from "react"
import { StyleSheet, Text, View } from "react-native"

import { BuyCard } from "../../Components/BuyCard"

export function ProductPage({ route }) {

    const { id } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Meu Produtor</Text>
            </View>
            <BuyCard productId={id} />

        </View>
    )
}

const styles = StyleSheet.create({
    containerSafe: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        height: "auto"
    },
    header: {
        backgroundColor: "#26A03A",
        width: "100%",
        padding: 14,
        paddingTop: 50,
        justifyContent: "center",
        alignItems: "center",
        borderBottomRightRadius: 16,
        borderBottomLeftRadius: 16,
    },
    title: {
        color: "#fff",
        fontSize: 30,
        fontWeight: 'bold'
    },
    products: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        marginTop: 20
    },
})