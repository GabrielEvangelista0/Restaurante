import { useSetRecoilState } from "recoil"
import { pratosPedidosState } from "state/atom"
import typePrato from "types/Pratos"

export const useAddPedidoSacola = () => {
    const setPedido = useSetRecoilState(pratosPedidosState)

    return (prato: typePrato) => {
        setPedido(listaAntiga => [{prato: prato, quantidade: 1}, ...listaAntiga])
    }
}