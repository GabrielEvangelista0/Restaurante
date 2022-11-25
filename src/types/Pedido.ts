export default interface IPedido{
    endereco: IEndereco,
    nome: string,
    prato: typePrato
}

import cardapio from 'data/cardapio.json'

type typePrato = typeof cardapio[0]

interface IEndereco{
    bairro: string,
    numero: string,
    rua: string
}