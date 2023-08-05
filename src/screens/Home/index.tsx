import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, SafeAreaView, Image } from 'react-native';
import { InputSearch } from '../../Components/Form/InputSearch';

import { data } from '../../../utils/Data';
import { Products } from '../../Components/Products';

type Products = []

export function Home() {
    const [products, SetProductsData] = useState<Products>([])

    useEffect(() => {

        async function getProducts() {
            try {
                const res = data
                SetProductsData(res);

            }
            catch (err) {
                console.log(err);
            }
        }

        getProducts()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Meu Produtor</Text>
            </View>
            <InputSearch
                placeholder='O que esta procurando?'
            />

            <Products
                data={products}
            />

            {/* <View style={styles.footer}>
                <Text>Desenvolvido por: Erik e Anderson</Text>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
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