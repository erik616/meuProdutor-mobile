import React, { useState } from "react"
import { Text, View, StyleSheet, TouchableOpacity } from "react-native"

import { ScrollView } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"

import { Button } from "../../Components/Form/Button"
import { Input } from "../../Components/Form/Input"
import { Picker } from "@react-native-picker/picker"


export function ManageProducts({ route }) {
    const { id } = route.params;
    const [eye, setEye] = useState(false)
    const [avalible, setAvalible] = useState("disponível")
    const [disable, setDisable] = useState(true)

    const navigation = useNavigation()

    const [pName, setPName] = useState('');
    const [pVolume, setPVolume] = useState('');
    const [pUndMedida, setPUndMedida] = useState('')
    const [pFoto, setPFoto] = useState('');
    const [pValor, setPValor] = useState('');
    const [pDescricao, setPDescricao] = useState('');

    const [add, setAdd] = useState(false);

    function AddProduct({ add }) {
        if (add === true) {
            return (
                <View style={styles.form}>
                    <View style={styles.picker}>
                        <Picker
                            selectedValue={avalible}
                            onValueChange={(itemValue, itemIndex) =>
                                setAvalible(itemValue)
                            }>
                            <Picker.Item label="Diponível" value="disponível" />
                            <Picker.Item label="Indisponível" value="indisponível" />
                        </Picker>
                    </View>
                    <Input
                        placeholder="Nome do produto"
                        type={"text"}
                        handleValue={(e: string) => setPName(e.toString())}
                        keyboard={"deafult"}
                        editable={true}
                        security={eye}
                        value={pName}
                    />
                    <Input
                        placeholder="Volume do produto ex: 5"
                        keyboard={"numeric"}
                        security={eye}
                        value={pVolume}
                        handleValue={(e: string) => setPVolume(e.toString())}
                        type={"text"}
                        editable={true}
                    />
                    <Input
                        placeholder="Tipo de unidade ex: KG, ML, L"
                        keyboard={"default"}
                        security={eye}
                        value={pUndMedida}
                        handleValue={(e: string) => setPUndMedida(e.toString())}
                        type={"text"}
                        editable={true}
                    />
                    <Input
                        placeholder="Link para foto principal"
                        keyboard={"default"}
                        security={eye}
                        value={pFoto}
                        handleValue={(e: string) => setPFoto(e.toString())}
                        type={"text"}
                        editable={true}
                    />
                    <Input
                        placeholder="Valor unitário do produto"
                        keyboard={"numeric"}
                        security={eye}
                        value={pValor + ""}
                        handleValue={(e: string) => setPValor(e.toString())}
                        type={"text"}
                        editable={true}
                    />
                    <Input
                        placeholder="Descrição"
                        keyboard={"default"}
                        security={eye}
                        value={pDescricao}
                        handleValue={(e: string) => setPDescricao(e.toString())}
                        type={"text"}
                        editable={true}
                    />
                    <View style={styles.buttons}>
                        <Button
                            placeholder="Salvar"
                            type="singin"
                            handlePress={() => { }}
                            disable={false}
                        />
                        <Button
                            placeholder="Cancelar"
                            type="singup"
                            handlePress={() => { setAdd(false) }}
                            disable={false}
                        />
                    </View>
                </View>
            )
        }
    }

    function homeScreen() {
        navigation.navigate('Home', {
            screen: 'Home', id: id
        })
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Meu Produtor</Text>
                    <View style={styles.form}>
                        <Text style={styles.subTitle}>Gerencie seus produtos</Text>
                        <Text>* Você ainda não cadastrou nenhum produto!</Text>

                        <View style={styles.buttons}>
                            <Button
                                placeholder="Novo produto"
                                type="singin"
                                handlePress={() => { setAdd(true) }}
                                disable={false}
                            />
                            <Button
                                placeholder="Voltar"
                                type="singup"
                                handlePress={homeScreen}
                                disable={false}
                            />
                        </View>
                        <AddProduct add={add} />

                    </View>

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