import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"

interface Product {
    id: number,
    nome: string,
    volume: number,
    unidadedemedida: string,
    valor: number,
    produtor: number,
    foto: string;
    img2: string,
    img3: string,
    img4: string,
    categoria: number,
    descricao: string
}

interface ProductsProps {
    data: Product
}

export function CardProduct({ data }: ProductsProps) {
    return (
        <View style={styles.container}>
            <View style={styles.imagemContainer}>
                <Image
                    source={{
                        uri: `${data.foto}`
                    }}
                    style={styles.imagem}
                />
            </View>
            <View style={styles.info}>
                <Text style={styles.productName}>{data.nome}</Text>
                <Text style={styles.productVol}>{data.volume} {data.unidadedemedida}</Text>
                <Text style={styles.productPrice}>R$ {data.valor}</Text>

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.8}
                >
                    <Ionicons name='basket-sharp' size={30} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "60%",
        borderWidth: 1.4,
        borderColor: "#D9D9D9",
        borderRadius: 6,
        position: 'relative',
        marginHorizontal: "20%",
        marginVertical: 10
    },
    imagemContainer: {
        height: 240
    },
    imagem: {
        width: "100%",
        height: "100%",
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    info: {
        paddingVertical: 4,
        paddingHorizontal: 6,
        gap: 6
    },
    button: {
        position: "absolute",
        backgroundColor: "#26A03A",
        bottom: 14,
        right: 14,
        height: 50,
        width: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    productName: {
        fontSize: 18,
        fontWeight: "700"
    },
    productVol: {
        fontSize: 14,
        fontWeight: "500"
    },
    productPrice: {
        fontSize: 16,
        fontWeight: "500"
    },
})