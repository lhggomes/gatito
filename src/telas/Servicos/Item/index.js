import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";


import estilos from "./estilos";
import CampoInteiro from "../../../componentes/CampoInteiro";
import Botao from "../../../componentes/Botao";

export default function Item({ nome, preco, descricao }) {

    const [quantidade, setQuantidade] = useState(0);
    const [total, setTotal] = useState(0);
    const [expandir, setExpandir] = useState(false);

    const atualizaQuantidadeTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade);
        calculaTotal(novaQuantidade);

    }

    const calculaTotal = (novaQuantidade) => {
        setTotal(novaQuantidade * preco);
    }

    const inverterExpandir = () => {
        setExpandir(!expandir);
        atualizaQuantidadeTotal(0);
    }

    return (
        <>
            <TouchableOpacity style={estilos.informacao} onPress={inverterExpandir}>
                <Text style={estilos.nome}>{nome}</Text>
                <Text style={estilos.descricao}>{descricao}</Text>
                <Text style={estilos.preco}>{Intl.NumberFormat('pt-BR', {
                    style: "currency", currency: 'BRL'
                }).format(preco)}
                </Text>
            </TouchableOpacity>
            {expandir && <View style={estilos.carrinho}>
                <View style={estilos.valor}>
                    <Text style={estilos.descricao}>Quantidade:</Text>
                    <CampoInteiro valor={quantidade} estilos={estilos.quantidade} acao={atualizaQuantidadeTotal}></CampoInteiro>
                </View>
                <View style={estilos.valor}>
                    <Text style={estilos.descricao}>Total:</Text>
                    <Text style={estilos.preco}>{Intl.NumberFormat('pt-BR', {
                        style: "currency", currency: 'BRL'
                    }).format(total)}
                    </Text>

                </View>
                <Botao valor="Adicionar" acao={() => { }}></Botao>

            </View>}
            <View style={estilos.divisor} />
        </>)

}