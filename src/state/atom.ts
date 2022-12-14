import { atom } from "recoil";
import { IPedido } from "interfaces/Pedido";
import cardapio from "data/cardapio.json"

export const pratosPedidosState = atom<IPedido[]>({
    key: 'pratosPedidosState',
    default: []
})

export const pratos = atom({
  key: 'pratos',
  default: [...cardapio]
})
