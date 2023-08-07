import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { InputSearch } from '../../Components/Form/InputSearch';

import { data } from '../../../utils/Data';
import { Products } from '../../Components/Products';
import { Button } from '../../Components/Form/Button';
import { useNavigation } from '@react-navigation/native';


type Products = []

export function Home({ route }) {
    const [products, SetProductsData] = useState<Products>([])
    const navigation = useNavigation()
    const { id } = route.params

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

    function editProfile() {
        navigation.navigate('EditProfile', {
            screen: 'EditProfile',
            id: id
        })
    }

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

            <Button
                placeholder={"Meu perfil \u27A1\uFE0F"}
                type="singup"
                handlePress={editProfile}
                disable={false}
            />
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