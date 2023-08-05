import React from "react"
import {
    View,
    Image,
    StyleSheet
} from "react-native"

export function ImageLogin() {
    return (
        < View style={styles.body} >
            <Image
                style={styles.img}
                source={require('./../../assets/img/produtor.jpg')}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 2,
        width: "100%",
    },
    img: {
        width: "100%",
        height: "100%",
        top: "20%"
    },
})