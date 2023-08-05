import React, { useEffect, useState } from "react"
import { Text, View, StyleSheet, SafeAreaView, Alert, } from "react-native"
import { Input } from "../../Components/Form/Input"
import { Button } from "../../Components/Form/Button"
import { useNavigation } from "@react-navigation/native";

export function SingUp() {
    const [eye, setEye] = useState(true)
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [pass, setPass] = useState('')
    const [disable, setDisable] = useState(true)
    
    const navigation = useNavigation()
    
    useEffect(() => {
        const valid = () => {
            if (name === "" || cpf === "" || email === "" || number === "" || pass === "" ) return
            setDisable(false)
        }
        valid()
    }, [email, pass])
    
    function singup() {
        Alert.alert(
            null,
            "Função indisponivel",
            [
                {
                    text: "Voltar para o Login",
                    onPress: () => navigation.navigate("Login",{
                        screen: "Login"
                    }),
                }
            ],
            {
                cancelable: true,
            }
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meu Produtor</Text>
            <Text style={styles.subtitle}>Cadastre-se na Plataforma!</Text>
            <View
                style={styles.login}
            >
                <Input
                    placeholder="Insira seu nome completo"
                    type={"email"}
                    security={eye}
                    value={name}
                    handleValue={(e: string) => setName(e.toString())}
                />
                <Input
                    placeholder="Insira seu CPF"
                    type={"email"}
                    security={eye}
                    value={cpf}
                    handleValue={(e: string) => setCpf(e.toString())}
                />
                <Input
                    placeholder="Insira seu email"
                    type={"email"}
                    security={eye}
                    value={email}
                    handleValue={(e: string) => setEmail(e.toString())}
                />
                <Input
                    placeholder="Insira seu numero/Whatsap"
                    type={"email"}
                    security={eye}
                    value={number}
                    handleValue={(e: string) => setNumber(e.toString())}
                />
                <Input
                    placeholder="Insira sua senha"
                    type={"senha"}
                    handlePress={() => setEye(!eye)}
                    security={eye}
                    value={pass}
                    handleValue={(e: string) => setPass(e.toString())}
                />

                <Button
                    placeholder="Cadastrar"
                    type="singup"
                    handlePress={singup}
                    disable={disable}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#26A03A",
        paddingTop: 40
    },
    subtitle:{
        fontSize: 24,
        fontWeight: "bold",
        color: "#26A03A",
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