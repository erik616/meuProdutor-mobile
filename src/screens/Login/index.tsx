import React, { useEffect, useState } from "react"
import { Text, View, StyleSheet, SafeAreaView, } from "react-native"
import { Input } from "../../Components/Form/Input"
import { Button } from "../../Components/Form/Button"
import { ImageLogin } from "../../Components/ImageLogin"
import { users } from "../../../utils/Data"
import { useNavigation } from "@react-navigation/native";

export function Login() {
    const [eye, setEye] = useState(true)
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [disable, setDisable] = useState(true)

    const navigation = useNavigation()

    useEffect(() => {
        const valid = () => {
            if (email.length <= 6 || pass.length <= 6) return
            setDisable(false)
        }
        valid()
    }, [email, pass])

    function login() {
        try {
            const res = users
            console.log(res);
            const user = res.find(el => el.email === email)
            if (user) {
                if (user.pass === pass) {
                    navigation.navigate('Home', {
                        screen: 'Home'
                    })
                }
                console.log("senha errada");
            }
        } catch (error) {
            console.log(error);

        }
    }

    function singup() {
        navigation.navigate("SignUp", {
            screen: "SignUp"
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Meu Produtor</Text>
                <View
                    style={styles.login}
                >
                    <Input
                        editable
                        keyboard={'email-address'}
                        placeholder="Digite seu email"
                        type={"email"}
                        security={false}
                        value={email}
                        handleValue={(e: string) => setEmail(e.toString())}
                    />
                    <Input
                        editable
                        keyboard={'default'}
                        placeholder="Insira sua senha"
                        type={"senha"}
                        handlePress={() => setEye(!eye)}
                        security={eye}
                        value={pass}
                        handleValue={(e: string) => setPass(e.toString())}
                    />

                    <View style={styles.buttons}>
                        <Button
                            placeholder="Entrar"
                            type="singin"
                            handlePress={login}
                            disable={disable}
                        />
                        <Button
                            placeholder="Cadastrar"
                            type="singup"
                            handlePress={singup}
                            disable={false}
                        />
                    </View>
                </View>
            </View>
            <ImageLogin />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    header: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 40,
        marginTop: 40,
        fontWeight: "bold",
        color: "#26A03A",
        paddingTop: 40
    },
    login: {
        width: "90%",
        marginTop: 20,
        paddingVertical: 20,
        paddingHorizontal: 16,
        borderRadius: 6,
        gap: 12
    },
    buttons: {
        flexDirection: "row",
        width: "100%",
        gap: 14
    }
})