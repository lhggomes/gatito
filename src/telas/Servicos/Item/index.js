import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";


import estilos from "./estilos";
import CampoInteiro from "../../../componentes/CampoInteiro";

export default function Item({ nome, preco, descricao }) {

    const [quantidade, setQuantidade] = useState(0);

    return (
        <>
            <View style={estilos.informacao}>
                <Text style={estilos.nome}>{nome}</Text>
                <Text style={estilos.descricao}>{descricao}</Text>
                <Text style={estilos.preco}>{preco}</Text>
            </View>
            <View style={estilos.carrinho}>
                <View style={estilos.valor}>
                    <Text style={estilos.descricao}>Quantidade:</Text>
                    <CampoInteiro valor={quantidade} acao={setQuantidade}></CampoInteiro>
                </View>
                <View style={estilos.valor}>
                    <Text style={estilos.descricao}>Preço:</Text>
                    <Text style={estilos.preco}>0</Text>

                </View>
                <Button title="Adicionar"></Button>

            </View>
            <View style={estilos.divisor} />
        </>)

}