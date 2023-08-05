import React from 'react';
import { FlatList, StyleSheet, Text, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { CardProduct } from '../CardProduct';

interface Props {
    data: []
}

function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={{fontSize: 16, fontWeight: '700', color:"#fff",}}>Desenvolvido por: Erik e Anderson</Text>
        </View>
    )
}

export function Products({ data }: Props) {
    return (
        <View style={styles.container}>
            <FlatList
                style={{ width: "100%" }}
                data={data}
                renderItem={({ item }) => <CardProduct data={item} />}
                // ListFooterComponent={<Footer />}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: { width: "100%", flex: 1 },
    footer: {
        backgroundColor: "#26A03A",
        width: "100%",
        paddingVertical: 20,
        alignItems: 'center',
        marginTop: 40,
    }
})