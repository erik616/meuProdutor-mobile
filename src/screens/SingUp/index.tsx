import React, { useEffect, useState } from "react"
import { Text, View, StyleSheet, SafeAreaView, Alert, } from "react-native"

import { Input } from "../../Components/Form/Input"
import { Button } from "../../Components/Form/Button"

import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler"

import { Picker } from '@react-native-picker/picker';

export function SingUp() {
    const [eye, setEye] = useState(false)
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [address, setaddress] = useState('')
    const [producerName, setProducerName] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [pass, setPass] = useState('')
    const [disable, setDisable] = useState(true)

    const navigation = useNavigation()

    const [selectedType, setSelectedType] = useState();

    function foo() { }

    useEffect(() => {
        const valid = () => {
            if (name === "" || cpf === "" || cnpj === "" || email === "" || telefone === "" || pass === "") return
            setDisable(false)
        }
        valid()
    }, [email, pass])

    function loginScreen() {
        navigation.navigate('Login', {
            screen: 'Login'
        })
    }

    function singup() {
        Alert.alert(
            null,
            "Função indisponivel",
            [
                {
                    text: "Voltar para o Login",
                    onPress: () => navigation.navigate("Login", {
                        screen: "Login"
                    }),
                }
            ],
            {
                cancelable: true,
            }
        )
    }


    function ProdutorInputs({ selectedType }) {
        if (selectedType === "produtor") {
            return (
                <>
                    <Input
                        placeholder="Digite seu nome de produtor"
                        type={"text"}
                        security={eye}
                        value={producerName}
                        handleValue={(e: string) => setProducerName(e.toString())}
                        keyboard={"default"}
                        editable={true}
                    />
                    <Input
                        placeholder="Digite seu CNPJ (se tiver)"
                        type={"text"}
                        security={eye}
                        value={cnpj}
                        handleValue={(e: string) => setCnpj(e.toString())}
                        keyboard={"numerir"}
                        editable={true}
                    />
                </>
            )
        }
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.subtitle}>Cadastre-se na Plataforma!</Text>
                <View
                    style={styles.login}
                >
                    <View style={styles.picker}>
                        <Picker
                            selectedValue={selectedType}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedType(itemValue)
                            }>
                            <Picker.Item label="Sou cliente" value="cliente" />
                            <Picker.Item label="Sou produtor" value="produtor" />
                        </Picker>
                    </View>
                    <Input
                        editable
                        keyboard={"deafult"}
                        placeholder="Insira seu nome completo"
                        type={"email"}
                        security={eye}
                        value={name}
                        handleValue={(e: string) => setName(e.toString())}
                    />

                    <Input
                        editable
                        keyboard={"numeric"}
                        placeholder="Insira seu CPF"
                        type={"email"}
                        security={eye}
                        value={cpf}
                        handleValue={(e: string) => setCpf(e.toString())}
                    />

                    <Input
                        editable
                        keyboard={"email-addres"}
                        placeholder="Insira seu email"
                        type={"email"}
                        security={eye}
                        value={email}
                        handleValue={(e: string) => setEmail(e.toString())}
                    />

                    <Input
                        editable
                        keyboard={"phone-pad"}
                        placeholder="Insira seu numero/Whatsap"
                        type={"email"}
                        security={eye}
                        value={telefone}
                        handleValue={(e: string) => setTelefone(e.toString())}
                    />

                    <Input
                        placeholder="Digite seu endereço completo"
                        type={"text"}
                        security={eye}
                        value={address}
                        handleValue={(e: string) => setaddress(e.toString())}
                        keyboard={"default"}
                        editable={true}
                    />

                    <ProdutorInputs selectedType={selectedType} />

                    <Input
                        editable
                        keyboard={"default"}
                        placeholder="Insira sua senha"
                        type={"senha"}
                        handlePress={() => setEye(!eye)}
                        security={eye}
                        value={pass}
                        handleValue={(e: string) => setPass(e.toString())}
                    />

                    <View style={styles.buttons}>
                        <Button
                            placeholder="Cadastrar"
                            type="singup"
                            handlePress={singup}
                            disable={disable}
                        />
                        <Button
                            placeholder="Entrar"
                            type="singup"
                            handlePress={loginScreen}
                            disable={false}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
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
    subtitle: {
        fontSize: 28,
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
    },
    picker: {
        borderBottomWidth: 2.0,
        borderBottomColor: "#26A03A",
    }
})