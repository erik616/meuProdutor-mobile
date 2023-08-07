import React, { useEffect, useState } from "react"
import { View, StyleSheet, Image, TouchableOpacity, Text, ScrollView } from "react-native"

import { data } from "../../../utils/Data";

export function BuyCard(props) {

    const [pName, setPName] = useState('');
    const [pVolume, setPVolume] = useState('');
    const [pUndMedida, setPUndMedida] = useState('')
    const [pFoto, setPFoto] = useState('');
    const [pValor, setPValor] = useState('');
    const [pDescricao, setPDescricao] = useState('');
    const [pProducerName, setPProducerName] = useState('');

    useEffect(() => {
        const res = data
        console.log(res);
        const p = res.find(el => el.id === props.productId)
        if (p) {
            setPName(p.nome)
            setPVolume(p.volume + "")
            setPUndMedida(p.unidadedemedida)
            setPValor(p.valor + "")
            setPFoto(p.foto)
            setPProducerName(p.produtor + "")
            setPDescricao(p.descricao)
        }

    }, [])


    return (

        <ScrollView style={styles.container}>
            <Text style={styles.productName}>{`${pName} - ${pVolume}${pUndMedida}`}</Text>
            <Text style={styles.productorName}>Produzido e entregue por: {`${pProducerName}`}</Text>
            <View style={styles.container}>
                <Image
                    source={{
                        uri: `${pFoto}`
                    }}
                    style={styles.imagem}
                />
            </View>
            <View style={styles.imageRow}>
                <View style={styles.emptyContainer}><Text style={styles.productorName}>{""}</Text></View>
                <View style={styles.emptyContainer}><Text style={styles.productorName}>{""}</Text></View>
                <View style={styles.emptyContainer}><Text style={styles.productorName}>{""}</Text></View>
                <View style={styles.arrowContainer}><Text style={styles.arrow}>{" > "}</Text></View>
            </View>
            <Text style={styles.productorRating}>{"Avaliações 4/5 | Reputação do Produtor >"}</Text>
            {/* <Text style={styles.productIsAvalible}>{"DISPONÍVEL"}</Text> */}
            <Text style={styles.productPrice}>{pValor}</Text>
            <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.productBuy}>{"Comprar "}</Text>
                {/* <FontAwesomeIcon icon={ "bag-shopping" } style={{color: "#ffffff",}} /> */}
            </TouchableOpacity>
            <View>
                <Text style={styles.productDescriptionTitle}>{"Descrição do produto"}</Text>
                <Text style={styles.productDescription}>{pDescricao}</Text>
            </View>
            <View>
                <Text style={styles.productDescriptionTitle}>{"Feito com muito carinho por:"}</Text>
                <Text style={styles.productorNameSuper}>{pProducerName}</Text>
                <View style={styles.productorPhotoContainer}><Text style={styles.productorName}>{""}</Text></View>
                <View style={styles.centerContainer}>
                    <TouchableOpacity style={styles.profileButton}>
                        <Text style={styles.productorProfile}>{"Visite o perfil "}</Text>
                        {/* <FontAwesomeIcon icon={ "bag-shopping" } style={{color: "#ffffff",}} /> */}
                    </TouchableOpacity>
                </View>
            </View>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop: 20
                }}
            />
            <Text style={styles.productDescriptionTitle}>{"Mostrar Avaliações 	\u2B07\uFE0F "}</Text>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "96%",
        borderWidth: 0.1,
        borderColor: "#D9D9D9",
        borderRadius: 6,
        marginVertical: 10
    },
    imagemContainer: {

    },
    imagem: {
        width: "100%",
        height: 330,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        position: 'relative',
        objectFit: 'fill'
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
        fontSize: 26,
        fontWeight: "700",
        marginVertical: 0
    },
    productVol: {
        fontSize: 14,
        fontWeight: "500"
    },
    productPrice: {
        fontSize: 59,
        fontWeight: "900",
        textAlign: 'center',
        marginBottom: 11,
    },
    productorRating: {
        fontSize: 13,
        textAlign: 'center',
    },
    productorName: {
        fontSize: 13,
    },
    imageRow: {
        display: "flex",
        flexDirection: "row",

    },
    emptyContainer: {
        backgroundColor: "#D9D9D9",
        display: 'flex',
        width: 74,
        height: 54,
        marginLeft: 20,
        marginBottom: 13,
    },
    arrowContainer: {
        backgroundColor: "",
        display: 'flex',
        width: 74,
        height: 54,
        marginLeft: 20,
        justifyContent: 'center',
        marginBottom: 13,
    },
    arrow: {
        fontSize: 30,
    },
    productIsAvalible: {
        fontSize: 13,
        fontWeight: "900",
        fontStyle: 'italic',
        color: "#0E6B1D",
        textAlign: 'center',
        marginTop: 10,
    },
    productBuy: {
        fontSize: 40,
        fontWeight: "800",
        textAlign: 'center',
        color: "#ffffff",
    },
    buyButton: {
        backgroundColor: "#178629",
        borderRadius: 19,
        height: 63,
        display: 'flex',
        justifyContent: 'center'
    },
    productDescriptionTitle: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: "500",
        textAlign: 'center',
    },
    productDescription: {
        textAlign: 'justify',
        fontSize: 16,
    },
    productorNameSuper: {
        fontSize: 25,
        fontWeight: "400",
        textAlign: 'center',
        color: '#0E6B1D',
    },
    productorPhotoContainer: {
        backgroundColor: "#D9D9D9",
        display: 'flex',
        width: '90%',
        height: 194,
        marginLeft: 20,
        marginBottom: 13,
        marginTop: 13,
    },
    productorProfile: {
        fontSize: 26,
        fontWeight: "800",
        textAlign: 'center',
        color: "#ffffff",
    },
    profileButton: {
        backgroundColor: "#178629",
        borderRadius: 19,
        height: 43,
        display: 'flex',
        justifyContent: 'center',
        width: "80%",
        marginLeft: 42
    },
    centerContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: "100%",
    },

})