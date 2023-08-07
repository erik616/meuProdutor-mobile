import React, { useState, useEffect } from "react"
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"

import { Button } from "../../Components/Form/Button";
import { Input } from "../../Components/Form/Input";

import { users } from "../../../utils/Data";

import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler"

export function EditProfile({ route }) {
    const navigation = useNavigation()

    const { id } = route.params;

    const [eye, setEye] = useState(false)
    const [name, setName] = useState('Maicon')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [endereco, setEndereco] = useState('')
    const [producerName, setProducerName] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [pass, setPass] = useState('')
    const [disable, setDisable] = useState(true)
    const [selectedType, setSelectedType] = useState('');

    useEffect(() => {
        const res = users
        console.log(res);
        const user = res.find(el => el.id === id)
        if (user) {
            setName(user.name)
            setCpf(user.cpf + "")
            setEmail(user.email)
            setTelefone(user.telefone + "")
            setEndereco(user.endereco)
            setProducerName(user.producerName)
            setCnpj(user.cpnj + "")
            setSelectedType(user.type)
        }
    }, [])

    function foo() {}

    function homeScreen() {
        navigation.navigate('Home', {
            Screen: 'Home',
            id: id
        })
    }

    function ScreenProducts({ selectedtype }) {
        if (selectedtype === "produtor") {
            return (
                <TouchableOpacity
                    style={styles.productButton}
                    onPress={() => {
                        navigation.navigate('ManageProducts', {
                            screen: 'Manage',
                            id: id,
                        })
                    }}
                >
                    <Text style={styles.btnTitle}>{"Meus produtos"}</Text>
                </TouchableOpacity>
            )
        }
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
                        editable={false}
                    />
                </>
            )
        }
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Meu Produtor</Text>
                    <View style={styles.form}>
                        <Text style={styles.subTitle}>Edite suas informações</Text>

                        <Input
                            placeholder="Digite seu nome"
                            type={"text"}
                            security={eye}
                            value={name}
                            handleValue={(e: string) => setName(e.toString())}
                            keyboard={"deafult"}
                            editable={true}
                        />
                        <Input
                            placeholder="Digite seu CPF"
                            keyboard={"numeric"}
                            security={eye}
                            value={cpf}
                            handleValue={(e: string) => setCpf(e.toString())}
                            type={"text"}
                            editable={false}
                        />
                        <Input
                            placeholder="Digite seu email"
                            type={"email"}
                            security={eye}
                            value={email}
                            handleValue={(e: string) => setEmail(e.toString())}
                            keyboard={"email-address"}
                            editable={true}
                        />
                        <Input
                            placeholder="Digite seu telefone"
                            type={"text"}
                            security={eye}
                            value={telefone}
                            handleValue={(e: string) => setTelefone(e.toString())}
                            keyboard={"phone-pad"}
                            editable={true}
                        />
                        <Input
                            placeholder="Digite seu endereço completo"
                            type={"text"}
                            security={eye}
                            value={endereco}
                            handleValue={(e: string) => setEndereco(e.toString())}
                            keyboard={"default"}
                            editable={true}
                        />

                        <ProdutorInputs selectedType={selectedType} />

                        <View style={styles.buttons}>
                            <Button
                                placeholder="Salvar"
                                type="singin"
                                handlePress={foo}
                                disable={disable}
                            />
                            <Button
                                placeholder="Voltar"
                                type="singup"
                                handlePress={homeScreen}
                                disable={false}
                            />

                        </View>


                    </View>
                    <ScreenProducts selectedtype={selectedType} />
                </View>

            </View>
        </ScrollView>
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
    subTitle: {
        fontSize: 26,
        textAlign: 'center'
    },
    form: {
        width: "96%",
        borderWidth: 1.2,
        borderEndStartRadius: 90,
        marginTop: 20,
        paddingVertical: 20,
        paddingHorizontal: 16,
        borderRadius: 6,
        gap: 12,
        borderColor: "#26A03A",
        backgroundColor: "#F8F8F8",
        marginBottom: 10
    },
    buttons: {
        flexDirection: "row",
        width: "100%",
        gap: 14
    },
    picker: {
        borderBottomWidth: 2.0,
        borderBottomColor: "#26A03A",
    },
    btnTitle: {
        fontSize: 26,
        marginTop: 10,
        fontWeight: "700",
        textAlign: 'center',
        marginBottom: 6,
        color: "#26A03A",
    },
    productButton: {
        width: "98%",
        marginVertical: 8,
        paddingHorizontal: 8,
        paddingVertical: 7,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
        borderWidth: 1.0,
        backgroundColor: "#F6F6F6",
        borderColor: "#26A03A",
    },
})