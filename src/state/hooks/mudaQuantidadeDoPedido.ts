import { useRecoilState } from "recoil"
import { pratosPedidosState } from "state/atom"
import { IPedido } from "interfaces/Pedido"

export const useAdcionar = () => {
    const [pedidos, setPedidos] = useRecoilState(pratosPedidosState)

    return (pedido: IPedido) => {
        let num = pedido.quantidade
        num++
        const novaLista = [...pedidos].map((item) => {
            if (item.id === pedido.id) return { ...item, quantidade: num };
            else return item;
        });
        setPedidos(novaLista)
    }
}

export const useSubtrair = () => {
    const [pedidos, setPedidos] = useRecoilState(pratosPedidosState)

    return (pedido: IPedido) => {
        let num = pedido.quantidade
        num--
        const novaLista = [...pedidos].map((item) => {
            if (item.id === pedido.id) return { ...item, quantidade: num };
            else return item;
        });
        setPedidos(novaLista)
    }
}